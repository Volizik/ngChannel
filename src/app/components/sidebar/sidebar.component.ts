import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    isVisible = false;
    constructor() {
    }

    ngOnInit() {
    }

    toggle() {
        this.isVisible = ! this.isVisible;
    }

}
