import { Action } from '@ngrx/store';

export const ADD_ITEM = '[Product Details] add one item';
export class AddItem implements Action {
  type: typeof ADD_ITEM = ADD_ITEM;

  constructor(readonly itemId: string) {}
}

export const ADD_ITEM_SUCCESS = '[Cart API] add one item success';
export class AddItemSuccess implements Action {
  type: typeof ADD_ITEM_SUCCESS = ADD_ITEM_SUCCESS;
}

export const ADD_ITEM_ERROR = '[Cart API] add one item error';
export class AddItemError implements Action {
  type: typeof ADD_ITEM_ERROR = ADD_ITEM_ERROR;

  constructor(readonly itemId: string) {}
}

export const FETCH_CART_ITEMS = '[Cart Effect] fetch items';
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

export const REMOVE_ITEM = '[cart] remove one item';
export class RemoveItem implements Action {
  type: typeof REMOVE_ITEM = REMOVE_ITEM;

  constructor(readonly itemId: string) {}
}

export const REMOVE_ITEM_SUCCESS = '[cart] remove one item success';
export class RemoveItemSuccess implements Action {
  type: typeof REMOVE_ITEM_SUCCESS = REMOVE_ITEM_SUCCESS;
}

export const REMOVE_ITEM_ERROR = '[cart] remove one item error';
export class RemoveItemError implements Action {
  type: typeof REMOVE_ITEM_ERROR = REMOVE_ITEM_ERROR;

  constructor(readonly itemId: string) {}
}

export const REMOVE_ALL = '[cart] remove all items';
export class RemoveAll implements Action {
  type: typeof REMOVE_ALL = REMOVE_ALL;
}

export const REMOVE_ALL_SUCCESS = '[cart] remove all items success';
export class RemoveAllSuccess implements Action {
  type: typeof REMOVE_ALL_SUCCESS = REMOVE_ALL_SUCCESS;
}

export const REMOVE_ALL_ERROR = '[cart] remove all items error';
export class RemoveAllError implements Action {
  type: typeof REMOVE_ALL_ERROR = REMOVE_ALL_ERROR;

  constructor(readonly itemIds: string[]) {}
}

export const PURCHASE_ITEMS = '[cart] purchase all items';
export class PurchaseItems implements Action {
  type: typeof PURCHASE_ITEMS = PURCHASE_ITEMS;

  constructor(readonly payload: { id: string; quantity: number }[]) {}
}

export const PURCHASE_ITEMS_SUCCESS = '[cart] purchase all items success';
export class PurchaseItemsSuccess implements Action {
  type: typeof PURCHASE_ITEMS_SUCCESS = PURCHASE_ITEMS_SUCCESS;
}

export const PURCHASE_ITEMS_ERROR = '[cart] purchase all items error';
export class PurchaseItemsError implements Action {
  type: typeof PURCHASE_ITEMS_ERROR = PURCHASE_ITEMS_ERROR;
}

export type All =
  | AddItem
  | AddItemSuccess
  | AddItemError
  | FetchCartItems
  | FetchCartItemsSuccess
  | FetchCartItemsError
  | RemoveItem
  | RemoveItemSuccess
  | RemoveItemError
  | RemoveAll
  | RemoveAllSuccess
  | RemoveAllError
  | PurchaseItems
  | PurchaseItemsSuccess
  | PurchaseItemsError;
