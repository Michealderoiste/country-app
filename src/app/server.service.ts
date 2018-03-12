import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Country} from './country.model';

@Injectable()
export class ServerService {

    constructor(private http: HttpClient) {
    }

    getCountryAbout(code: string) {
        return this.http.get('https://restcountries.eu/rest/v2/alpha/' + code);
    }
}