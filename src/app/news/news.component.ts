import { Component, OnInit } from '@angular/core';
import {Country} from '../country.model';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../profile.css']
})
export class NewsComponent implements OnInit {
    country: Country;

    constructor(private countryService: CountryService) {
    }

    ngOnInit() {

        this.country = this.countryService.getCurrentCountry();
        console.log(this.country);
    }

}
