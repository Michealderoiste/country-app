import {Injectable} from '@angular/core';
import {Country} from './country.model';

@Injectable()
export class CountryService {
    returned: Country;
    private countries: Country[] = [
        new Country(1, 'Italy', 'IT'),
        new Country(2, 'Spain', 'ES'),
        new Country(3, 'United States of America', 'US'),
        new Country(4, 'France', 'FR'),
        new Country(5, 'South Africa', 'ZA'),
        new Country(6, 'Germany', 'DE'),
        new Country(7, 'Australia', 'AU'),
        new Country(8, 'Japan', 'JP'),
        new Country(9, 'South Korea', 'KR'),
        new Country(10, 'Canada', 'CA'),
        new Country(11, 'Argentina', 'AR'),
        new Country(12, 'Greece', 'GR'),
        new Country(13, 'Russia', 'RU'),
        new Country(14, 'Brazil', 'BR'),
        new Country(15, 'Sweden', 'SE'),
        new Country(16, 'Portugal', 'PT'),
        new Country(17, 'New Zealand', 'NZ'),
        new Country(18, 'Croatia', 'HR'),
        new Country(19, 'Yemen', 'YE'),
        new Country(20, 'United Arab Emirates', 'AE'),
        new Country(21, 'China', 'CN')
    ];

    getCountry(id: number) {
        this.returned = this.countries.find(c => c.id === +id);
        return this.returned;
    }

    getCountries() {
        return this.countries.sort(function (a, b) {
            const x = a.name.toLowerCase();
            const y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }
}
