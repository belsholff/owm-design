import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SiteSettingsService } from "../../services/site-settings.service";

@Component({
  selector: 'owm-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
    public id : string;
    public portfoliogrid1 : any[];

    constructor(private activatedRoute: ActivatedRoute, private siteSettings: SiteSettingsService) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            this.id = params.get('id');

            // Buscar no banco os dados de this.id
            this.portfoliogrid1 = this.siteSettings.portfoliogrid1;
        });
    }

}
