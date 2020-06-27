import { Component, OnInit, HostBinding, ViewChild, ElementRef, AfterViewInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'owm-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit, AfterViewInit {
  //data to exhibit
  @Input() private dataset : any;

  @HostBinding('style.backgroundColor') private backgroundColor: string;
  @ViewChild("cover") private cover: ElementRef;
  @ViewChild("coverContent") private coverContent: ElementRef;
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    //propriedades configuráveis
    this.backgroundColor = this.dataset.backgroundColor;
    // document.querySelector<HTMLElement>("#wrapper").style.opacity = this.siteSettings.cover.opacity; //avoid direct DOM manipulation
  }
  
  ngAfterViewInit(): void {
    // this.wrapper.nativeElement.style.opacity = this.siteSettings.cover.opacity; //avoid direct DOM manipulation
    this.renderer.setStyle(this.cover.nativeElement, "opacity", this.dataset.opacity);
    if (!this.dataset.coverContent) this.renderer.addClass(this.coverContent.nativeElement, 'invisible');
  }
}
