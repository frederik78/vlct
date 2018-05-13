import {Component, OnInit} from '@angular/core';
import {ItemsListService} from './items-list.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from './model/item.interface';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {

  item = <Item>{};
  parametersGroup: FormGroup;

  constructor(private itemsListService: ItemsListService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
    this.parametersGroup = this.fb.group(
      {
        'itemName': ['', [Validators.required]],
        'quantity': ['', [Validators.required, Validators.min(0)]],
      }
    );
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;

    if (id) {
      this.itemsListService.getItem(id).subscribe(
        (data) => {
          this.item = data;
        },
        (error) => {
          console.error('ERREUR', error);
        }
      );
    }
  }

  save() {
    if (this.item.id) {
      this.itemsListService.updateItem(this.item).subscribe(
        () => {
          this.router.navigateByUrl('/items');
        }
      );
    } else {
      this.itemsListService.createItem(this.item).subscribe(
        () => {
          this.router.navigateByUrl('/items');
        }
      );
    }
  }

  cancel() {
    this.router.navigateByUrl('/items');
  }

  get quantity() { return this.parametersGroup.get('quantity'); }
  get itemName() { return this.parametersGroup.get('itemName'); }

}
