import {Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    isCollapsed = true;

    @HostListener('document:click', ['$event'])
    preventEmptyHrefNav(event: any) {
        let isCollapseButton = false;
        event.path.map(dom => {
            if(dom.classList && dom.classList[0] === 'navbar-toggler') isCollapseButton = true;
        });
        if(!isCollapseButton) this.isCollapsed = true;

    }



}
