import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RoutingModule } from './router/routing.module';
import { CartModule } from './cart/cart.module';
import {
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
} from '@angular/material';
import { ProductDetailsModule } from './product-details/product-details.module';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { StoreModule, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer as productReducer, GlobalState } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects';
import { RatingModule } from './rating/rating.module';

export function productSync(reducer: ActionReducer<GlobalState>) {
  return (state, action) => {
    let reducedState = reducer(state, action);
    if (action.type === INIT) {
      const data = window.localStorage.getItem('productData');
      if (data) {
        reducedState = {
          ...reducedState,
          product: JSON.parse(data),
        };
      }
    }
    if (action.type !== UPDATE) {
      window.localStorage.setItem(
        'productData',
        JSON.stringify(reducedState.product)
      );
    }
    return reducedState;
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    RoutingModule,
    CartDetailsModule,
    CartModule,
    ProductDetailsModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    StoreModule.forRoot(
      { product: productReducer },
      { metaReducers: [productSync] }
    ),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    RatingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
