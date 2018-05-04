import {Component, OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid';
import {ItemsListService} from './items-list.service';
import {AgGridUtil} from '../shared/ag-grid/ag-grid-utils';
import {Router} from '@angular/router';
import {SuppressButtonComponent} from '../shared/ag-grid/suppress-button.component';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
})
export class ItemsListComponent implements OnInit {
  gridOptions: GridOptions;

  constructor(private itemsListService: ItemsListService,
              private router: Router) {
    this.gridOptions = AgGridUtil.getNewAgGridOptionsInstance();
    this.gridOptions.columnDefs = [
      {
        headerName: 'Name',
        field: 'name',
      },
      {
        headerName: 'Quantity',
        field: 'quantity',
      },
      {
        headerName: '',
        field: 'id',
        cellRendererFramework: SuppressButtonComponent,
        cellRendererParams: {
          dialog_box_title: 'Deleting an item'
        },
        colId: 'params',
        width: 30,
        suppressFilter: true,
        suppressSorting: true
      }
    ];
  }

  ngOnInit(): void {

    this.itemsListService.getAllItems().subscribe(
      (data) => {
        console.log(data);
        this.gridOptions.api.setRowData(data);
        this.gridOptions.api.sizeColumnsToFit();
      },
      (error) => {
        console.error('ERREUR', error);
      }
    );
  }

  onRowDoubleClicked($event) {
    this.router.navigateByUrl('item/' + $event.data.id);
  }

  createItem() {
    this.router.navigateByUrl('item/');
  }
}
