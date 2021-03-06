import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

    pagination;

    @Input('pagination') set paginationObject(pagination) {

        this.pagination = pagination;
        console.log('a pagination:', pagination)
    }

    @Output('selected-page')  newPage: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }


    setPage(pageNum: number) {
        this.newPage.emit(pageNum);
    }


}
