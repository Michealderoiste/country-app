import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Country} from './country.model';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {

    constructor(private http: HttpClient) {
    }

    getCountryAbout(code: string) {
        return this.http.get('https://restcountries.eu/rest/v2/alpha/' + code).catch((error: Response) => {
            return Observable.throw('Something went wrong with API Call');
        });
    }
}