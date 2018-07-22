import { Action } from '@ngrx/store';

export const ADD_ITEM_SUCCESS = '[Cart API] add one item success';
export class AddItemSuccess implements Action {
  readonly type = ADD_ITEM_SUCCESS;
}

export const ADD_ITEM_ERROR = '[Cart API] add one item error';
export class AddItemError implements Action {
  readonly type = ADD_ITEM_ERROR;

  constructor(readonly itemId: string) {}
}

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

export type All =
  | AddItemSuccess
  | AddItemError
  | FetchCartItems
  | FetchCartItemsSuccess
  | FetchCartItemsError;
