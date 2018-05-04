import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import {ItemsListService} from './items-list.service';
import {ItemsListComponent} from './items-list.component';
import {ItemDetailComponent} from './item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ItemsListComponent,
    ItemDetailComponent
  ],
  providers: [
    ItemsListService
  ]
})
export class ItemsModule {
}
