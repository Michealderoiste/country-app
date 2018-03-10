import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country.service';
import {Country} from '../country.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  country: Country;
  id: number;
  constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
      this.route.params.subscribe(
          (params: Params) => {
              this.id = params['id'];
              this.country = this.countryService.getCountry(this.id);
              console.log(this.countryService.getCountries());
              console.log(this.id);
              console.log(this.country);
          }
      );
  }

}
