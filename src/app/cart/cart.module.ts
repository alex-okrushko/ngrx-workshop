import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { StoreModule } from '@ngrx/store';
import { CART_FEATURE_KEY, reducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    StoreModule.forFeature(CART_FEATURE_KEY, {
      cart: reducer,
    }),
  ],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartModule {}
