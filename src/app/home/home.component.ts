import {Component, OnInit} from '@angular/core';
import {Country} from '../country.model';
import {CountryService} from '../country.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    countries: Country[];
    countryIndex: number;

    ngOnInit() {
        this.countries = this.countryService.getCountries();
    }


    constructor(private countryService: CountryService, private router: Router, private route: ActivatedRoute) {
    }

    onSelectCountry(event) {
        this.countryIndex = event.target.value;
        this.countryService.changeCountry(this.countryIndex);
        this.router.navigate(['overview'], {relativeTo: this.route});

    }

}
