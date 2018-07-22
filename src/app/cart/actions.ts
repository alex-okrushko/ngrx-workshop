import { Action } from '@ngrx/store';

export const FETCH_CART_ITEMS = '[Cart Effect] fetch items';
export class FetchCartItems implements Action {
  readonly type = FETCH_CART_ITEMS;
}

export const FETCH_CART_ITEMS_SUCCESS = '[Cart API] fetch items success';
export class FetchCartItemsSuccess implements Action {
  readonly type = FETCH_CART_ITEMS_SUCCESS;

  constructor(readonly itemIds: string[]) {}
}

export const FETCH_CART_ITEMS_ERROR = '[Cart API] fetch items error';
export class FetchCartItemsError implements Action {
  readonly type = FETCH_CART_ITEMS_ERROR;
}

export type All = FetchCartItems | FetchCartItemsSuccess | FetchCartItemsError;
