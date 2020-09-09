import { Component, OnInit, OnDestroy, ViewChild, ViewChildren, ElementRef, HostBinding, HostListener, Renderer2, QueryList, Input } from '@angular/core';
import { faPlus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'owm-imggrid',
  templateUrl: './imggrid.component.html',
  styleUrls: ['./imggrid.component.scss']
})
export class ImggridComponent implements OnInit {
  //data to exhibit
  @Input() private dataset : any;

  // service variables declaration and definition
  public items : any;
  private loadItemsPerSize : any;
  public expansiveGrid : boolean;
  private columnsDefinition : any;
  public interactiveMode : boolean;
  private height : any;
  public carouselMode : boolean;
  private firstDisplayed : number;
  private lastDisplayed : number;

  //css stuff declaration and definiton
  private screenSize : string;
  public cssColumns : any;
  public more = faPlus;
  public back = faAngleLeft;
  public foward = faAngleRight;
  public cssCarousel : string;

  //event destroyer
  private destroyTouchStartEvent : () => void;
  private destroyTouchEndEvent : () => void;

  //HTML access variables definition
  @HostBinding('style.width') public hostWidth : string;
  @ViewChildren('gridItem') private gridItems : QueryList<ElementRef>;
  @ViewChild('carouselContainer') private carouselContainer : ElementRef;

  //get  right window width group
  @HostListener('window:resize', ['$event']) private onResize(event? : string) {
    if(window.innerWidth >= 992) this.screenSize = 'lg';
    else if(window.innerWidth < 992 && window.innerWidth >= 768) this.screenSize = 'md';
    else if(window.innerWidth < 768) this.screenSize = 'sm';

    setTimeout(() => { //mandando para o fim da fila de execução
        if (this.carouselMode) {
            if(window.innerWidth >= 1366) this.hostWidth = '100%';
            else if(window.innerWidth < 1366 && window.innerWidth >= 992) this.hostWidth = '95%';
            else if(window.innerWidth < 992 && window.innerWidth >= 768) this.hostWidth = '90%';
            else if(window.innerWidth < 768) this.hostWidth = '85%';
        }

        const gridArray = this.gridItems.toArray();
        gridArray.forEach(el => this.renderer.setStyle(el.nativeElement, "height", this.height[this.screenSize]));
    }, 0);
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.onResize();

    this.items = this.dataset.items;
    this.loadItemsPerSize = this.dataset.loadItemsPerSize;
    this.expansiveGrid = this.dataset.expansiveGrid;
    this.columnsDefinition = this.dataset.columnsPerSize;
    this.interactiveMode = this.dataset.interactiveMode;
    this.height = this.dataset.height;
    this.carouselMode = this.dataset.carouselMode;

    // more css stuff definition
    this.cssColumns = this.setColumnsClasses();

    if (this.carouselMode) {
        this.cssCarousel = 'carouselWrapper';
        this.firstDisplayed = 0;
        this.lastDisplayed = this.columnsDefinition[this.screenSize] - 1;
    }
  }

  ngAfterViewInit() : void {
      this.setHoverLikeEffects();
      this.expandGrid();
  }

  ngOnDestroy() : void {
       if(this.interactiveMode) {
           this.destroyTouchStartEvent();
           this.destroyTouchEndEvent();
       }
  }

  ///PRIVATE METHODS
  private setColumnsClasses() : string[] {
    //col-sm -> mobile devices (up to 576px) //col-md -> tablet devices (up to 768px) //col-lg -> monitor devices (over 992px)
    const classes = [];
    for (let size in this.columnsDefinition) {
      let value = Math.floor(12 / this.columnsDefinition[size]);
      classes.push(`col-${size}-${value} `);
    }
    return classes;
  }

  //simulate mouse hover in 'interactiveMode: true' grids when a user touch the element on touchscreen devices
  private setHoverLikeEffects() : void {
      if(this.interactiveMode) {
          for (let item of this.gridItems) {
              this.destroyTouchStartEvent = this.renderer.listen(item.nativeElement, "touchstart", event => {
                  this.renderer.addClass(item.nativeElement, 'simulate-hover');
              });
              this.destroyTouchEndEvent = this.renderer.listen(item.nativeElement, "touchend", event => {
                  this.renderer.removeClass(item.nativeElement, 'simulate-hover');
              });
          }
      }
  }

  //PUBLIC METHODS
  public expandGrid() : void {
      const gridArray = this.gridItems.toArray();
      for (let i = 0; i < this.loadItemsPerSize[this.screenSize]; i++) {
          let notDisplayedItem = gridArray.find(el => getComputedStyle(el.nativeElement).display === 'none');

          //only to avoid error handler
          if (notDisplayedItem) this.renderer.setStyle(notDisplayedItem.nativeElement, "display", "flex");
    }

    //if there's no elements to exhibit, change button
    if (gridArray.every(el => getComputedStyle(el.nativeElement).display !== 'none')) {
      this.expansiveGrid = false;
    }
  }

  public goBack() {
      this.renderer.setStyle(this.carouselContainer.nativeElement, "opacity", "0");

      const that = this;
      setTimeout(() => {
          const gridArray = that.gridItems.toArray();
          if (that.firstDisplayed > 0) {
              var newFirst = that.firstDisplayed;
              var newLast = that.lastDisplayed;
              for (let i = 0; i < that.columnsDefinition[that.screenSize]; i++) {
                  const previousItem = gridArray[that.firstDisplayed + i];
                  if (previousItem) {
                      that.renderer.addClass(previousItem.nativeElement, "d-none");
                      newLast--;
                  }

                  const newItem = gridArray[that.firstDisplayed - i - 1];
                  if (newItem) {
                      that.renderer.removeClass(newItem.nativeElement, "d-none");
                      newFirst--;
                  }
              }
              that.firstDisplayed = newFirst;
              that.lastDisplayed = newLast;
          }
          that.renderer.removeStyle(that.carouselContainer.nativeElement, "opacity");
      }, 500);
  }

  public goFoward() {
      this.renderer.setStyle(this.carouselContainer.nativeElement, "opacity", "0");

      const that = this;
      setTimeout(() => {
          const gridArray = that.gridItems.toArray();
          if (that.lastDisplayed >= 0 && that.lastDisplayed < (gridArray.length - 1)) {
              var newFirst = that.firstDisplayed;
              var newLast = that.lastDisplayed;
              for (let i = 0; i < that.columnsDefinition[that.screenSize]; i++) {
                  const previousItem = gridArray[that.lastDisplayed - i];
                  if (previousItem) {
                      that.renderer.addClass(previousItem.nativeElement, "d-none");
                      newFirst++;
                  }

                  const newItem = gridArray[that.lastDisplayed + i + 1];
                  if (newItem) {
                      that.renderer.removeClass(newItem.nativeElement, "d-none");
                      newLast++;
                  }
              }
              that.firstDisplayed = newFirst;
              that.lastDisplayed = newLast;
          }
          that.renderer.removeStyle(that.carouselContainer.nativeElement, "opacity");
      }, 500);
  }
}
