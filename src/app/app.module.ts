import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomecomponentComponent} from './homecomponent/homecomponent.component';
import {FirstwindowComponent} from './firstwindow/firstwindow.component';
import {SecondwindowComponent} from './secondwindow/secondwindow.component';
import {ChatcomponentComponent} from './chatcomponent/chatcomponent.component';
import {FormsModule} from '@angular/forms';


const appRoutes: Routes = [{
  path: 'home', component: HomecomponentComponent
},
  {path: 'home/chat', component: ChatcomponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    FirstwindowComponent,
    SecondwindowComponent,
    ChatcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
