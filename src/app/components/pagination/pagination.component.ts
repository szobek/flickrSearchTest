import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


    selectedPage: number;
    pagination;

    @Input('pagination') set paginationObject(pagination) {
        this.pagination = pagination;
    }

    @Output('selected-page')  newPage: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
        console.log('a page', this.selectedPage);
    }

    setPage(pageNum: number) {
        this.newPage.emit(pageNum);
    }


}
