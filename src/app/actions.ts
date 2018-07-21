import { Action } from '@ngrx/store';
import { Product } from './model/product';

export const SET_PRODUCTS = 'Set Products';
export class SetProducts implements Action {
  readonly type = SET_PRODUCTS;

  constructor(readonly payload: Product[]) {}
}

export type All = SetProducts;
