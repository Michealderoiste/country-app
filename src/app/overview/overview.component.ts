import {Component, OnInit} from '@angular/core';
import {CountryService} from '../country.service';
import {Country} from '../country.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css', '../profile.css']
})
export class OverviewComponent implements OnInit {
    country: Country;
    id: number;

    constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.country = this.countryService.getCurrentCountry();
    }

}
