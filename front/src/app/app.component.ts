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
  public imggrid2 : any;
  public txtgrid1 : any;

  constructor(private siteSettings: SiteSettingsService) { }

  ngOnInit() {
    this.header = this.siteSettings.header;
    this.cover = this.siteSettings.cover;
    this.imggrid1 = this.siteSettings.imggrid1;
    this.imggrid2 = this.siteSettings.imggrid2;
    this.txtgrid1 = this.siteSettings.txtgrid1;
  }
}
