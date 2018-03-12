import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../server.service';
import {CountryService} from '../../country.service';
import {Country} from '../../country.model';

@Component({
    selector: 'app-about-details',
    templateUrl: './about-details.component.html',
    styleUrls: ['./about-details.component.css']
})
export class AboutDetailsComponent implements OnInit {
    country: Country;
    countryDetails: {};

    constructor(private serverService: ServerService, private countryService: CountryService) {
    }

    ngOnInit() {
        this.country = this.countryService.getCurrentCountry();
        this.serverService.getCountryAbout(this.country.code).subscribe(
            (response) => {
                console.log(response);
                this.countryDetails = response;
            },
            (error) => console.log(error)
        );

    }

}
