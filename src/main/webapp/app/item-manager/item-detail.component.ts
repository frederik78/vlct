import {Component, OnInit} from '@angular/core';
import {ItemsListService} from './items-list.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formControlBinding} from '@angular/forms/src/directives/ng_model';
import {Router} from '@angular/router';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {

  parametersGroup: FormGroup;

  constructor(private itemsListService: ItemsListService,
              private router: Router,
              private fb: FormBuilder) {
    this.parametersGroup = this.fb.group(
      {
        'itemName': ['', [Validators.required]],
        'quantity': ['', [Validators.required, Validators.min(0)]],
      }
    );
  }

  ngOnInit(): void {

  }

  save() {

  }

  cancel() {
    this.router.navigateByUrl('/items');
  }
}
