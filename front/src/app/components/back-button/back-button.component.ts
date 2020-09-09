import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'owm-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
    public back : any = faChevronCircleLeft;

    constructor(private location: Location) { }

    ngOnInit(): void {
    }

    backFunc(): void {
        this.location.back();
    }
}
