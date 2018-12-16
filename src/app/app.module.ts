import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService} from './data.service';

import {AppComponent} from './app.component';
import {PolicyListComponent} from './policy-list/policy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
