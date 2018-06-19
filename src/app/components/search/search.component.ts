import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {SearchService} from '../../services/search.service';

import {FlickrImage} from '../models/flickr-image';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {

    flickrImages: Array<FlickrImage> = [];
    pagination;
    tags: Array<string> = [];
    searchResultSubscribe;
    loaderSubscribe;
    loader: boolean;


    constructor(private searchService: SearchService) {
        this.searchResultSubscribe = this.searchService.searchResult$.subscribe(imgArr => {
            this.flickrImages = imgArr;
        });

        this.loaderSubscribe = this.searchService.loader$.subscribe(bool => this.loader = bool);

        this.pagination = {
            paginationSize: 0,
            currentPage: 0,
            next: 0,
            prev: 0

        };
    }

    startFormSearch(tags) {
        this.tags = tags;
        this.startSearch();
    }

    startSearch( page: number = 1) {

        this.searchService.loader$.next(true);

        this.searchService.callSearch(this.tags, page)

            .subscribe(
                (res: any) => {

                    this.pagination.currentPage = res.photos.page;
                    this.pagination.paginationSize = res.photos.pages;
                    this.pagination.next = (res.photos.page < res.photos.pages) ? res.photos.page + 1 : null;
                    this.pagination.prev = (res.photos.page > 1) ? res.photos.page - 1 : 1;
                    const arr = res.photos.photo.map(image => new FlickrImage(image));
                    this.searchService.searchResult$.next(arr);

                },
                (error: any) => {
                    console.log('a service error', error);
                },
                () => {
                    // console.log('complete call');
                    this.searchService.loader$.next(false);
                }
            );
    }

    setPage(x) {
        this.startSearch(x);
    }

    ngOnDestroy(): void {
        this.searchService.searchResult$.next([]);
        this.searchResultSubscribe.unsubscribe();
        this.flickrImages = [];
    }



}
