import { Action } from '@ngrx/store';
import { Product } from '../model/product';
import { RatingScore } from '../model/rating';

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

export const GET_CURRENT_PRODUCT_RATING =
  '[Product Details] get rating for current product';
export class GetCurrentProductRating implements Action {
  readonly type = GET_CURRENT_PRODUCT_RATING;
}

export const SET_RATING = '[Product Details] set rating';
export class SetRating implements Action {
  readonly type = SET_RATING;
  constructor(readonly score: RatingScore) {}
}

export type All =
  | FetchCurrentProduct
  | FetchProductError
  | FetchProductSuccess
  | AddItem
  | GetCurrentProductRating
  | SetRating;
