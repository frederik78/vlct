import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import {AppComponent} from './app.component';
import {ItemsModule} from './item-manager/items-list.module';
import {AppRoutingModule} from './app-routing.module';
import {SuppressButtonComponent} from './shared/ag-grid/suppress-button.component';


@NgModule({
  declarations: [
    AppComponent,
    SuppressButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AgGridModule.withComponents([SuppressButtonComponent]),
    ItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
