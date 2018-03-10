import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {NgModule} from '@angular/core';
import {PhrasesComponent} from './phrases/phrases.component';
import {AboutComponent} from './about/about.component';
import {DestinationsComponent} from './destinations/destinations.component';
import {NewsComponent} from './news/news.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [

    {'path': 'overview/:id', component: OverviewComponent},
    {'path': 'news', component: NewsComponent},
    {'path': 'destinations', component: DestinationsComponent},
    {'path': 'about', component: AboutComponent},
    {'path': 'language', component: PhrasesComponent},
    {'path': '', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
