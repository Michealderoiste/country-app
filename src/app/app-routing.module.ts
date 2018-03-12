import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {NgModule} from '@angular/core';
import {PhrasesComponent} from './phrases/phrases.component';
import {AboutComponent} from './about/about.component';
import {DestinationsComponent} from './destinations/destinations.component';
import {NewsComponent} from './news/news.component';
import {HomeComponent} from './home/home.component';
import {UnknownPageComponent} from './unknown-page/unknown-page.component';
import {PhrasesDetailsComponent} from './phrases/phrases-details/phrases-details.component';
import {NewsDetailsComponent} from './news/news-details/news-details.component';
import {AboutDetailsComponent} from './about/about-details/about-details.component';

const appRoutes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'overview', component: OverviewComponent},
    {
        'path': 'news', component: NewsComponent, children: [
            {'path': 'details', component: NewsDetailsComponent}
        ]
    },

    {'path': 'destinations', component: DestinationsComponent},
    {
        'path': 'about', component: AboutComponent, children: [
            {'path': 'details', component: AboutDetailsComponent}
        ]
    },
    {
        'path': 'language', component: PhrasesComponent, children: [
            {'path': 'details', component: PhrasesDetailsComponent}
        ]
    },

    {'path': 'unknown-path', component: UnknownPageComponent},
    {'path': '**', redirectTo: 'unknown-path'},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
