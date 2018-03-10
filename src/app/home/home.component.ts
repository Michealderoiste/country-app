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


    ngOnInit() {
        this.countries = this.countryService.getCountries();
    }


    constructor(private countryService: CountryService, private router: Router, private route: ActivatedRoute) {
    }

    onSelectCountry(event) {
        this.router.navigate(['overview', event.target.value], {relativeTo: this.route});

    }

}
