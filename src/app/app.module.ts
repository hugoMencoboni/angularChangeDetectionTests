import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Deep0Component } from './deep0/deep0.component';
import { Deep1Component } from './deep0/deep1/deep1.component';
import { Deep2Component } from './deep0/deep1/deep2/deep2.component';

@NgModule({
  declarations: [
    AppComponent,
    Deep0Component,
    Deep1Component,
    Deep2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
