import {Component, HostListener} from '@angular/core';
import {SearchService} from './services/search.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {



    loader: boolean = false;

    constructor(private searchService: SearchService) {
        this.searchService.loader$.subscribe(bool => this.loader = bool);
    }


}
