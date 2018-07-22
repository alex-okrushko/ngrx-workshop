import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer,
  RouterReducerState,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import {
  CustomRouterSerializer,
  RouterStateUrl,
} from './custom-router-serializer';
import { ROUTER_FEATURE_KEY } from './selectors';

const routes: Routes = [
  { path: 'details/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

const initialState: RouterReducerState<RouterStateUrl> = {
  state: { url: '/', params: {} },
  navigationId: -1,
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forFeature(ROUTER_FEATURE_KEY, routerReducer, { initialState }),
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
