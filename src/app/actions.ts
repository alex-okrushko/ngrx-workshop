import { Action } from '@ngrx/store';
import { Product } from './model/product';

export const SET_PRODUCTS = '[Products API] Set Products';
export class SetProducts implements Action {
  type: typeof SET_PRODUCTS = SET_PRODUCTS;

  constructor(readonly payload: Product[]) {}
}

export const FETCH_PRODUCTS = '[Home Page] Fetch Products';
export class FetchProducts implements Action {
  type: typeof FETCH_PRODUCTS = FETCH_PRODUCTS;
}

export type All = SetProducts | FetchProducts;
