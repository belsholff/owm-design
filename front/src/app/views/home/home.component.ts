import { Component, OnInit } from '@angular/core';

import { SiteSettingsService } from "../../services/site-settings.service";

@Component({
  selector: 'owm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public cover : any;
    public imggrid1 : any;
    public txtgrid1 : any;
    public imggrid2 : any;
    public jtronbtn : any;

    constructor(private siteSettings: SiteSettingsService) { }

    ngOnInit(): void {
        this.cover = this.siteSettings.cover;
        this.imggrid1 = this.siteSettings.imggrid1;
        this.txtgrid1 = this.siteSettings.txtgrid1;
        this.imggrid2 = this.siteSettings.imggrid2;
        this.jtronbtn = this.siteSettings.jtronbtn;
    }

}
