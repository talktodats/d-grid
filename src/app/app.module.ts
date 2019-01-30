import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DGridModule} from "../../projects/d-grid/src/lib/d-grid.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DGridModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
