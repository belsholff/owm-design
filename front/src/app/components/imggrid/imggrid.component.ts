import { Component, OnInit, OnDestroy, ViewChildren, ElementRef, HostListener, Renderer2, QueryList, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

  //css stuff declaration and definiton
  private screenSize : string;
  public cssColumns : any;
  public more = faPlus;

  //event destroyer
  private destroyTouchStartEvent : () => void;
  private destroyTouchEndEvent : () => void;

  //HTML access variables definition
  @ViewChildren('gridItem') private gridItems : QueryList<ElementRef>;

  //get  right window width group
  @HostListener('window:resize', ['$event']) private onResize(event? : string) {
    if(window.innerWidth >= 992) this.screenSize = 'lg';
    else if(window.innerWidth < 992 && window.innerWidth >= 768) this.screenSize = 'md';
    else if(window.innerWidth < 768) this.screenSize = 'sm';
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.onResize();

    this.items = this.dataset.items;
    this.loadItemsPerSize = this.dataset.loadItemsPerSize;
    this.expansiveGrid = this.dataset.expansiveGrid;
    this.columnsDefinition = this.dataset.columnsPerSize;
    this.interactiveMode = this.dataset.interactiveMode;

    // more css stuff definition
    this.cssColumns = this.setColumnsClasses();
  }

  ngAfterViewInit() : void {
      this.setHoverLikeEffects();
      this.expandGrid();
  }

  ngOnDestroy() : void {
      this.destroyTouchStartEvent();
      this.destroyTouchEndEvent();
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
}
