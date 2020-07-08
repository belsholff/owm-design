import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'owm-jumbotron-button',
  templateUrl: './jumbotron-button.component.html',
  styleUrls: ['./jumbotron-button.component.scss']
})
export class JumbotronButtonComponent implements OnInit {
    //data to exhibit
    @Input() private dataset : any;

    public title : string;
    public anchor : string;

    constructor() { }

    ngOnInit(): void {
        this.title = this.dataset.title;
        this.anchor = this.dataset.anchor;
    }

}
