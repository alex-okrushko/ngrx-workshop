import { Action } from '@ngrx/store';
import { Product } from '../model/product';

export const FETCH_CURRENT_PRODUCT = '[Product Details] Fetch current product';

export class FetchCurrentProduct implements Action {
  type: typeof FETCH_CURRENT_PRODUCT = FETCH_CURRENT_PRODUCT;
}

export const FETCH_PRODUCT_SUCCESS =
  '[Products Api] Fetch single Product success';
export class FetchProductSuccess implements Action {
  type: typeof FETCH_PRODUCT_SUCCESS = FETCH_PRODUCT_SUCCESS;

  constructor(readonly payload: Product) {}
}

export const FETCH_PRODUCT_ERROR = '[Products Api] Fetch single Product error';
export class FetchProductError implements Action {
  type: typeof FETCH_PRODUCT_ERROR = FETCH_PRODUCT_ERROR;
}

export type All = FetchCurrentProduct | FetchProductError | FetchProductSuccess;
