import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-chat-page',
    templateUrl: './chat-page.component.html',
    styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

    addListIsVisible = false;
    constructor() {
        // const lastMsg = document.querySelector('.chat__body');
        // console.log(lastMsg);
    }

    ngOnInit() {
    }

    toggleAddList() {
        this.addListIsVisible = !this.addListIsVisible;
    }

}
