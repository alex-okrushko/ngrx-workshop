import { Action } from '@ngrx/store';

export const ADD_ITEM = '[Product Details] add one item';
export class AddItem implements Action {
  type: typeof ADD_ITEM = ADD_ITEM;

  constructor(readonly itemId: string) {}
}

export const FETCH_CART_ITEMS = '[Cart Effect] auto fetch items';
export class FetchCartItems implements Action {
  type: typeof FETCH_CART_ITEMS = FETCH_CART_ITEMS;
}

export const FETCH_CART_ITEMS_SUCCESS = '[Cart API] fetch items success';
export class FetchCartItemsSuccess implements Action {
  type: typeof FETCH_CART_ITEMS_SUCCESS = FETCH_CART_ITEMS_SUCCESS;

  constructor(readonly itemIds: string[]) {}
}

export const FETCH_CART_ITEMS_ERROR = '[Cart API] fetch items error';
export class FetchCartItemsError implements Action {
  type: typeof FETCH_CART_ITEMS_ERROR = FETCH_CART_ITEMS_ERROR;
}

export type All =
  | AddItem
  | FetchCartItems
  | FetchCartItemsSuccess
  | FetchCartItemsError;
