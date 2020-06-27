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
  public grid1 : any;
  public grid2 : any;

  constructor(private siteSettings: SiteSettingsService) { }

  ngOnInit() {
    this.header = this.siteSettings.header;
    this.cover = this.siteSettings.cover;
    this.grid1 = this.siteSettings.grid1;
    this.grid2 = this.siteSettings.grid2;
  }
}
