import {Routes} from '@angular/router';
import {ItemsListComponent} from './item-manager/items-list.component';
import {ItemDetailComponent} from './item-manager/item-detail.component';


export const itemsManagerRoutes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemsListComponent,
  },
  {
    path: 'items/:id',
    component: ItemDetailComponent,
  },
  // {
  //     path: Constants.ROUTES.INCIDENT_PRODUIT.path,
  //     loadChildren: () => IncidentProduitModule
  // },
  // {
  //     path: Constants.ROUTES.COTE_FOURNISSEUR.path,
  //     loadChildren: () => CoteFournisseurModule
  // },
  // {path: 'admin', loadChildren: './admin/admin.module#SgghAdminModule'},
  {path: '**', redirectTo: '/'}
];
