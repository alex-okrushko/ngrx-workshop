import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { CustomRouterSerializer } from './custom-router-serializer';

const routes: Routes = [
  { path: 'details/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const ROUTER_FEATURE_KEY = 'Router feature';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forFeature(ROUTER_FEATURE_KEY, routerReducer),
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_FEATURE_KEY,
    }),
  ],
  exports: [RouterModule],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterSerializer },
  ],
})
export class RoutingModule {}
