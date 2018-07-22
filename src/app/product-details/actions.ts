import { Action } from '@ngrx/store';
import { Product } from '../model/product';

export const ADD_ITEM = '[Product Details] add one item';
export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(readonly itemId: string) {}
}

export const FETCH_CURRENT_PRODUCT = '[Product Details] Fetch current product';
export class FetchCurrentProduct implements Action {
  readonly type = FETCH_CURRENT_PRODUCT;
}

export const FETCH_PRODUCT_SUCCESS =
  '[Products Api] Fetch single Product success';
export class FetchProductSuccess implements Action {
  readonly type = FETCH_PRODUCT_SUCCESS;

  constructor(readonly payload: Product) {}
}

export const FETCH_PRODUCT_ERROR = '[Products Api] Fetch single Product error';
export class FetchProductError implements Action {
  readonly type = FETCH_PRODUCT_ERROR;
}

export type All =
  | AddItem
  | FetchCurrentProduct
  | FetchProductError
  | FetchProductSuccess;
