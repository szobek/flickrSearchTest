import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';
import {FlickrImage} from '../components/models/flickr-image';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    searchResult$: BehaviorSubject<Array<FlickrImage>> = new BehaviorSubject<Array<FlickrImage>>([]);
    searchResult: Array<FlickrImage> = [];

    apiKey: string;

    constructor(private http: HttpClient) {
        this.apiKey = environment.flickrApiKey;

    }

    generateTags(tags) {
        return tags.map((tag, index) => (index === 0) ? tag : `%2C+${tag}`).join().replace(',', '');
    }

    createCallUrl(tags, page) {
        return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.apiKey}&page=${page}&tags=${this.generateTags(tags)}&format=json&nojsoncallback=1`;
    }

    public callSearch(tagArray: Array<any>, page) {
        return this.http.get(`${this.createCallUrl(tagArray, page)}`).pipe(map((res: any) => res));
    }
}
