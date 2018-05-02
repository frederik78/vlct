import {Component, OnInit} from '@angular/core';
import {AgGridUtil} from './shared/ag-grid/ag-grid-utils';
import {GridOptions} from 'ag-grid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  gridOptions: GridOptions;

  constructor() {
    this.gridOptions = AgGridUtil.getNewAgGridOptionsInstance();
    this.gridOptions.columnDefs = [
      {headerName: 'Make', field: 'make'},
      {headerName: 'Model', field: 'model'},
      {headerName: 'Price', field: 'price'}
    ];


  }

  ngOnInit(): void {
    this.gridOptions.rowData = [
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000}
    ];
  }


}
