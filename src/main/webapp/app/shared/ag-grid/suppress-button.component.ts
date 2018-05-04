import {Component, Input} from '@angular/core';
import {GridApi} from "ag-grid/dist/lib/gridApi";

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Item} from '../../item-manager/model/item.interface';
import {ItemsListService} from '../../item-manager/items-list.service';

const DELETED = 'deleted';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Deleting an item</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>You're about to delete</p>
      <span style="font-weight: bold;">{{item.name}}</span>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="delete(item)">Delete</button>
      <button type="button" class="btn danger" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() item: Item;

  constructor(public activeModal: NgbActiveModal,
              private itemsListService: ItemsListService) {
  }

  delete(item: Item) {
    this.itemsListService.deleteItem(item.id).subscribe(
      () => {
        this.activeModal.close(DELETED);

      }
    );
  }
}


@Component({
  selector: 'suppress-button.component',
  templateUrl: './suppress-button.component.html',
  styleUrls: ['./suppress-button.component.css'],
})
export class SuppressButtonComponent {

  private params: any;

  constructor(private modalService: NgbModal) {

  }

  agInit(params: any): void {
    this.params = params;
  }

  removeItem() {
    console.log(this.params.data);
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.item = this.params.data;
    modalRef.result.then(
      (value) => {
        if (DELETED === value) {
          const gridApi: GridApi = this.params.api;
          gridApi.removeItems([this.params.node], false);
        }
      }
    );
  }
}
