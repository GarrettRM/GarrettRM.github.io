import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkhistoryComponent } from './workhistory/workhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WorkhistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
