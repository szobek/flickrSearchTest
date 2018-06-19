import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

    searchForm = new FormGroup({
        tags: new FormControl()
    });

    @Output('tags') tagsArray: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

    constructor() {
    }


    convertTags(searchString) {
        return searchString.split(',').map(s => s.replace(/\s/g, ''));
    }

    submitForm() {
        this.tagsArray.emit(this.convertTags(this.searchForm.value.tags));

    }


}
