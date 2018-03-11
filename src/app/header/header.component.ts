import { Component, OnInit } from '@angular/core';
import {Country} from '../country.model';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    country: Country;

    constructor(private countryService: CountryService) {
    }

    ngOnInit() {

        this.country = this.countryService.getCurrentCountry();
        console.log(this.country);
    }

}
