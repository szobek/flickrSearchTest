import {Component} from '@angular/core';
import {SearchService} from './services/search.service';
import {FlickrImage} from './components/models/flickr-image';
import {map} from 'rxjs/internal/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private searchService: SearchService) {

    }


}
