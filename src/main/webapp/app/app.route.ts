import {Routes} from '@angular/router';
import {ItemsListComponent} from './item-manager/items-list.component';


export const itemsManagerRoutes: Routes = [
    {
        path: '',
        component: ItemsListComponent,
        pathMatch: 'full'
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
