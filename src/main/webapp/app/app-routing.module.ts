import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {itemsManagerRoutes} from './app.route';

const LAYOUT_ROUTES = [
  ...itemsManagerRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
