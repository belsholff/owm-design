import { Component, OnInit, Input, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'owm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slide', [
      state('hide', style({ "transform": 'translateX(100%)' })),
      state('show', style([{ "transform": 'translateX(0)' }])),
      transition('* => *', animate(300))
    ])
  ],
})
export class HeaderComponent implements OnInit {
  //data to exhibit
  @Input() private dataset : any;

  public items: any;
  @Input() public stt: string;
  public bar: any = faBars;

  //load right navbar state
  @HostListener('window:resize', ['$event'])
  private onResize(event? : string) {
    if (window.innerWidth >= 992) {
      this.switchSlide("show");
    } else if (window.innerWidth < 992) {
      this.switchSlide("hide");
    }
  }

  constructor() { 
    this.onResize();
  }

  ngOnInit(): void {
    this.items = this.dataset.items;
  }

  //switch between load and hide navbar using automatic and manual modes
  public switchSlide(manual?: string){
    //check manual operation first, to avoid function misusing
    if (manual === "show") {
      this.bar = faTimes; 
      this.stt = 'show';
    } else if (manual === "hide" || this.stt === 'show') {
      this.bar = faBars; 
      this.stt = 'hide';
    } else if (this.stt === 'hide') {
      this.bar = faTimes; 
      this.stt = 'show';
    }
  }
}
