import { Action } from '@ngrx/store';
import { Product } from './model/product';

export const FETCH_PRODUCTS_SUCCESS = '[Products API] Fetch Products success';
export class FetchProductsSuccess implements Action {
  readonly type = FETCH_PRODUCTS_SUCCESS;

  constructor(readonly payload: Product[]) {}
}

export const FETCH_PRODUCTS_ERROR = '[Products API] Fetch Products error';
export class FetchProductsError implements Action {
  readonly type = FETCH_PRODUCTS_ERROR;
}

export type All = FetchProductsSuccess | FetchProductsError;
