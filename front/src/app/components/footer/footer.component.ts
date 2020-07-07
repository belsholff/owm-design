import { Component, OnInit, Input } from '@angular/core';
import * as brands from "@fortawesome/free-brands-svg-icons"; //maybe it could be heavy

@Component({
    selector: 'owm-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    //data to exhibit
    @Input() private dataset : any;

    public socialMedias : any[];
    public copyright : string;
    public bottomText : string;

    constructor() { }

    ngOnInit(): void {
        this.socialMedias = this.dataset.socialMedias;
        for (const sm of this.socialMedias) {
            sm.faIcon = brands[sm.faIcon];
        }

        this.copyright = `© ${new Date().getFullYear()} ${this.dataset.copyright}`;
        this.bottomText = this.dataset.bottomText;
    }

}
