import {Component, OnInit} from '@angular/core';
import {Country} from '../country.model';
import {CountryService} from '../country.service';


@Component({
    selector: 'app-phrases',
    templateUrl: './phrases.component.html',
    styleUrls: ['./phrases.component.css', '../profile.css']
})
export class PhrasesComponent implements OnInit {
    country: Country;

    constructor(private countryService: CountryService) {

    }

    ngOnInit() {

        this.country = this.countryService.getCurrentCountry();
        console.log(this.country);
    }

}
