import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {OverviewComponent} from './overview/overview.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {NewsComponent} from './news/news.component';
import {DestinationsComponent} from './destinations/destinations.component';
import {AboutComponent} from './about/about.component';
import {PhrasesComponent} from './phrases/phrases.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CountryService} from './country.service';
import {UnknownPageComponent} from './unknown-page/unknown-page.component';
import {ApiService} from './api.service';
import {ApiKeysService} from './api-keys.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {PhrasesDetailsComponent} from './phrases/phrases-details/phrases-details.component';
import {NewsDetailsComponent} from './news/news-details/news-details.component';
import {AboutDetailsComponent} from './about/about-details/about-details.component';
import { DestinationsDetailsComponent } from './destinations/destinations-details/destinations-details.component';
import {ServerService} from './server.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent,
        HeaderComponent,
        NewsComponent,
        DestinationsComponent,
        AboutComponent,
        PhrasesComponent,
        HomeComponent,
        UnknownPageComponent,
        PhrasesDetailsComponent,
        NewsDetailsComponent,
        AboutDetailsComponent,
        DestinationsDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FlashMessagesModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        CountryService,
        ApiService,
        ApiKeysService,
        ServerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
