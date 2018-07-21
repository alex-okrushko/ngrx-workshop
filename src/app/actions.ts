import { Action } from '@ngrx/store';
import { Product } from './model/product';

export const FETCH_PRODUCTS = '[Home Page] Fetch Products';
export class FetchProducts implements Action {
  type: typeof FETCH_PRODUCTS = FETCH_PRODUCTS;
}

export const FETCH_PRODUCTS_SUCCESS = '[Products API] Fetch Products success';
export class FetchProductsSuccess implements Action {
  type: typeof FETCH_PRODUCTS_SUCCESS = FETCH_PRODUCTS_SUCCESS;

  constructor(readonly payload: Product[]) {}
}

export const FETCH_PRODUCTS_ERROR = '[Products API] Fetch Products error';
export class FetchProductsError implements Action {
  type: typeof FETCH_PRODUCTS_ERROR = FETCH_PRODUCTS_ERROR;
}

export type All = FetchProducts | FetchProductsSuccess | FetchProductsError;
