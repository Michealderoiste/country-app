import {Component, OnInit} from '@angular/core';
import {Country} from '../country.model';
import {CountryService} from '../country.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: 'app-phrases',
    templateUrl: './phrases.component.html',
    styleUrls: ['./phrases.component.css', '../profile.css']
})
export class PhrasesComponent implements OnInit {
    country: Country;

    constructor(private countryService: CountryService, private translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }

    ngOnInit() {

        this.country = this.countryService.getCurrentCountry();
        console.log(this.country);
    }

}
