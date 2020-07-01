import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
    selector: 'owm-txtgrid',
    templateUrl: './txtgrid.component.html',
    styleUrls: ['./txtgrid.component.scss']
})
export class TxtgridComponent implements OnInit {
    //data to exhibit
    @Input() private dataset : any;

    // service variables declaration and definition
    public items : any;
    private loadItemsPerSize : any;
    private columnsDefinition : any;

    //css stuff declaration and definiton
    public cssColumns : any;

    constructor() { }

    // @HostListener('window:resize', ['$event']) private onResize(event? : string) {
    //   if(window.innerWidth >= 992) this.screenSize = 'lg';
    //   else if(window.innerWidth < 992 && window.innerWidth >= 768) this.screenSize = 'md';
    //   else if(window.innerWidth < 768) this.screenSize = 'sm';
    // }

    ngOnInit(): void {
        // this.onResize();

        this.items = this.dataset.items;
        this.loadItemsPerSize = this.dataset.loadItemsPerSize;
        this.columnsDefinition = this.dataset.columnsPerSize;

        this.cssColumns = this.setColumnsClasses();
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


}
