import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

    types = environment.searchObjects.keys;
    brands = environment.searchObjects.keys[0].brand;

    searchForm = new FormGroup({
        tags: new FormControl(''),
        vehicleType: new FormControl(this.types[0].type),
        brand: new FormControl(this.types[0].brand[0])
    });

    @Output('tags') tagsArray: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

    constructor() {}


    convertTags(searchString) {
        return searchString.split(',').map(s => s.trim());
    }

    submitForm() {
        let emitData;

        // if the tags input is empty
        if (this.searchForm.value.tags === '') {

            // if the vehicleType is not empty, but the brand is embty
            if (this.searchForm.value.vehicleType !== '' && this.searchForm.value.brand === null) {
                emitData = [this.searchForm.value.vehicleType];
            }
            // if the vehicleType is not empty, and the brand is selected
            else if (this.searchForm.value.vehicleType !== '' && this.searchForm.value.brand !== null) {
                emitData = [this.searchForm.value.brand];
            }
        } else {
            emitData = this.convertTags(this.searchForm.value.tags);
        }

        this.tagsArray.emit(emitData);
        return false;
    }

    change(evt) {
        this.brands = this.types[evt.target.selectedIndex].brand;
    }

}
