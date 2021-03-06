import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CollapseModule} from 'ngx-bootstrap';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import { HttpClientModule} from '@angular/common/http';
import { ImageCardComponent } from './components/image-card/image-card.component';

import { ModalModule } from 'ngx-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'kereses', component: SearchComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        SearchComponent,
        ImageCardComponent,
        PaginationComponent,
        SearchFieldComponent,
        HomeComponent,
        AboutComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
