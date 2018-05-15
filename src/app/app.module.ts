import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './components/search/search.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {ChipsComponent} from './components/chips/chips.component';
import {MenuComponent} from './components/menu/menu.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ChatsListPageComponent } from './pages/chats-list-page/chats-list-page.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        CheckboxComponent,
        ChipsComponent,
        MenuComponent,
        SidebarComponent,
        ChatPageComponent,
        ChatsListPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
