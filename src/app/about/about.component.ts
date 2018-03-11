import {Component, OnInit} from '@angular/core';
import {CountryService} from '../country.service';
import {Country} from '../country.model';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css', '../profile.css']
})
export class AboutComponent implements OnInit {
    country: Country;

    constructor(private countryService: CountryService) {
    }

    ngOnInit() {

        this.country = this.countryService.getCurrentCountry();
        console.log(this.country);
    }

}
