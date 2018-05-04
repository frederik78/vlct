import {Routes} from '@angular/router';
import {ItemsListComponent} from './item-manager/items-list.component';
import {ItemDetailComponent} from './item-manager/item-detail.component';


export const itemsManagerRoutes: Routes = [
  {
    path: 'item/:id',
    component: ItemDetailComponent,
  },
  {
    path: 'items',
    component: ItemsListComponent,
  },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: 'items'}
];
