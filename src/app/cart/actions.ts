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

export const REMOVE_ITEM_SUCCESS = '[Cart API] remove one item success';
export class RemoveItemSuccess implements Action {
  readonly type = REMOVE_ITEM_SUCCESS;
}

export const REMOVE_ITEM_ERROR = '[Cart API] remove one item error';
export class RemoveItemError implements Action {
  readonly type = REMOVE_ITEM_ERROR;

  constructor(readonly itemId: string) {}
}

export const REMOVE_ALL_SUCCESS = '[Cart API] remove all items success';
export class RemoveAllSuccess implements Action {
  readonly type = REMOVE_ALL_SUCCESS;
}

export const REMOVE_ALL_ERROR = '[Cart API] remove all items error';
export class RemoveAllError implements Action {
  readonly type = REMOVE_ALL_ERROR;

  constructor(readonly itemIds: string[]) {}
}

export const PURCHASE_ITEMS_SUCCESS = '[Cart API] purchase all items success';
export class PurchaseItemsSuccess implements Action {
  readonly type = PURCHASE_ITEMS_SUCCESS;
}

export const PURCHASE_ITEMS_ERROR = '[Cart API] purchase all items error';
export class PurchaseItemsError implements Action {
  readonly type = PURCHASE_ITEMS_ERROR;
}

export type All =
  | AddItemSuccess
  | AddItemError
  | FetchCartItems
  | FetchCartItemsSuccess
  | FetchCartItemsError
  | RemoveItemSuccess
  | RemoveItemError
  | RemoveAllSuccess
  | RemoveAllError
  | PurchaseItemsSuccess
  | PurchaseItemsError;
