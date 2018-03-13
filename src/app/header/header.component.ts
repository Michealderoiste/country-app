import {Component, OnInit} from '@angular/core';
import {Country} from '../country.model';
import {CountryService} from '../country.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    country: Country;
    searchForm: FormGroup;

    constructor(private countryService: CountryService, private flashMessagesService: FlashMessagesService) {
    }

    ngOnInit() {

        this.country = this.countryService.getCurrentCountry();
        this.countryService.currentCountry.subscribe((country) => {
            this.country = this.countryService.getCurrentCountry();
        });
        //this.flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 99000 });
        this.searchForm = new FormGroup({
            'search': new FormControl(null)
        });
    }

    onSubmit() {
        console.log('HELLO');
        console.log(this.searchForm);
        if (this.searchForm.value.search !== '') {
            if (!this.countryService.getCountryByName(this.searchForm.value.search)) {
                console.log("called");
                this.flashMessagesService.show('Sorry, we cannot find any information on ' + this.searchForm.value.search, {
                    cssClass: 'alert-danger',
                    timeout: 99000
                });
            }
        }
    }

}
