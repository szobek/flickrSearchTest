import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html',
    styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {


    @Input('image-param') imageParam;

    modalRef: BsModalRef;

    constructor(private modalService: BsModalService  ) {
    }

    ngOnInit() {
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

}
