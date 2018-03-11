import {BrowserModule} from '@angular/platform-browser';
import {APP_ID, NgModule} from '@angular/core';
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
import {DetailsComponent} from './news/details/details.component';
import {UnknownPageComponent} from './unknown-page/unknown-page.component';
import {ApiService} from './api.service';
import {ApiKeysService} from './api-keys.service';
import {TranslatorService} from './translator.service';


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
        DetailsComponent,
        UnknownPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        CountryService,
        ApiService,
        ApiKeysService,
        TranslatorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
