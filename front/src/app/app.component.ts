import { Component, OnInit } from '@angular/core';

import { SiteSettingsService } from "./services/site-settings.service";

@Component({
  selector: 'owm-root',
  templateUrl: "app.component.html",
  styleUrls: [ "app.component.scss" ]
})
export class AppComponent {
  title = 'OWM Design';
  public header : any;
  public cover : any;
  public imggrid1 : any;
  public txtgrid1 : any;
  public imggrid2 : any;
  public jtronbtn : any;
  public footer : any;

  constructor(private siteSettings: SiteSettingsService) { }

  ngOnInit() {
    this.header = this.siteSettings.header;
    this.cover = this.siteSettings.cover;
    this.imggrid1 = this.siteSettings.imggrid1;
    this.txtgrid1 = this.siteSettings.txtgrid1;
    this.imggrid2 = this.siteSettings.imggrid2;
    this.jtronbtn = this.siteSettings.jtronbtn;
    this.footer = this.siteSettings.footer;
  }
}
