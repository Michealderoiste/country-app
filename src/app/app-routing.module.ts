import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {NgModule} from '@angular/core';
import {PhrasesComponent} from './phrases/phrases.component';
import {AboutComponent} from './about/about.component';
import {DestinationsComponent} from './destinations/destinations.component';
import {NewsComponent} from './news/news.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './news/details/details.component';
import {UnknownPageComponent} from './unknown-page/unknown-page.component';

const appRoutes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'overview', component: OverviewComponent},
    {'path': 'news', component: DetailsComponent},
    {'path': 'destinations', component: DestinationsComponent},
    {'path': 'about', component: AboutComponent},
    {'path': 'language', component: PhrasesComponent},
    {'path': 'unknown-path', component: UnknownPageComponent},
    {'path': '**', redirectTo: 'unknown-path'},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
