import { Action } from '@ngrx/store';
import { Product } from './model/product';

export const SET_PRODUCTS = 'Set Products';
export class SetProducts implements Action {
  type: typeof SET_PRODUCTS = SET_PRODUCTS;

  constructor(readonly payload: Product[]) {}
}

export type All = SetProducts;
