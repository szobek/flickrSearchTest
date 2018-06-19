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

export const routes = [
    {path: 'kereses', component: SearchComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        SearchComponent,
        ImageCardComponent,
        PaginationComponent,
        SearchFieldComponent,
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
