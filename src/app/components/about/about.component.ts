import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {

    keyHit: number = 0;
    timeout;

    @HostListener('document:keydown', ['$event'])
    keyEvent(event: any) {
        if (event.key === 'Control') {

            clearInterval(this.timeout);

            this.keyHit++;

            if(this.keyHit === 5) location.href = 'http://szobekweb.hu';

            this.timeout = setTimeout(() => {
                this.keyHit = 0;
            }, 500);

        }

    }


}
