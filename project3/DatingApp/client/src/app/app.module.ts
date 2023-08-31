import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({  //decorator these are the files required to run angular files
  declarations: [
    AppComponent
  ],
  imports: [ // used if we want to use any other modules from angular or our own modules
    BrowserModule,
    AppRoutingModule, 
    //using another module to mak http req to our .net app
    HttpClientModule, BrowserAnimationsModule //in order to use this module we need to import it from angular
  ],
  providers: [],
  bootstrap: [AppComponent]
  //angular module is responsible for bootstraping our app component
//this is entry point into or app and is responsible for displaying the content from app component
})
export class AppModule { }
