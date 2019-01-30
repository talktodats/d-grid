import {ModuleWithProviders, NgModule} from '@angular/core';
import {DGRID_COMPONENTS} from "./d-grid.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {DataService} from "./d-datatable/d-datatable.service";

@NgModule({
  declarations: DGRID_COMPONENTS,
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  exports: DGRID_COMPONENTS
})
export class DGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DGridModule,
      providers: [DataService],
    };
  }
}
