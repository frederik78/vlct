import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {ItemsModule} from './item-manager/items-list.module';
import {AppRoutingModule} from './app-routing.module';
import {NgbdModalContent, SuppressButtonComponent} from './shared/ag-grid/suppress-button.component';


@NgModule({
  declarations: [
    AppComponent,
    SuppressButtonComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,

    AgGridModule.withComponents([SuppressButtonComponent]),
    ItemsModule
  ],
  providers: [],
  entryComponents:[NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
