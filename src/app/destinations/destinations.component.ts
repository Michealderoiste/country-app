import { Component, OnInit } from '@angular/core';
import {Country} from '../country.model';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css', '../profile.css']
})
export class DestinationsComponent implements OnInit {
    country: Country;

    constructor(private countryService: CountryService) {
    }

    ngOnInit() {

        this.country = this.countryService.getCurrentCountry();
        console.log(this.country);
    }

}
