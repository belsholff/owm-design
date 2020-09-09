import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeTransitionAnimation } from './route-transition-animation';

import { SiteSettingsService } from "./services/site-settings.service";

@Component({
  selector: 'owm-root',
  templateUrl: "app.component.html",
  styleUrls: [ "app.component.scss" ],
  animations: [ routeTransitionAnimation ]
})
export class AppComponent {
  title = 'OWM Design';
  public header : any;
  public footer : any;

  constructor(private siteSettings: SiteSettingsService) { }

  ngOnInit() {
    this.header = this.siteSettings.header;
    this.footer = this.siteSettings.footer;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
