import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-angular';


import {AppComponent} from './app.component';
import {ItemsModule} from './item-manager/items-list.module';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    ItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
