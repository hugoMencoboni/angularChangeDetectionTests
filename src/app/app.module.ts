import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Deep0Component } from './deep0/deep0.component';
import { Deep1OnPushComponent } from './deep0/deep1.on-push/deep1.on-push.component';
import { Deep1Component } from './deep0/deep1/deep1.component';
import { Deep2Component } from './deep0/deep1/deep2/deep2.component';


@NgModule({
  declarations: [
    AppComponent,
    Deep0Component,
    Deep1Component,
    Deep2Component,
    Deep1OnPushComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
