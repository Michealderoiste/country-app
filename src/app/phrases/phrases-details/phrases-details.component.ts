import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Country} from '../../country.model';
import {CountryService} from '../../country.service';

@Component({
    selector: 'app-phrases-details',
    templateUrl: './phrases-details.component.html',
    styleUrls: ['./phrases-details.component.css']
})
export class PhrasesDetailsComponent implements OnInit {
    country: Country;

    constructor(private translate: TranslateService, private countryService: CountryService) {
        translate.setDefaultLang('en');
    }

    ngOnInit() {
        this.country = this.countryService.getCurrentCountry();
        this.translate.use(this.country.code.toLowerCase());
    }

}
