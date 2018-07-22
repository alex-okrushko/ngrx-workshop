import { Action } from '@ngrx/store';

export const REMOVE_ITEM = '[Cart Details] remove one item';
export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(readonly itemId: string) {}
}

export const REMOVE_ALL = '[Cart Details] remove all items';
export class RemoveAll implements Action {
  readonly type = REMOVE_ALL;
}

export const PURCHASE_ITEMS = '[Cart Details] purchase all items';
export class PurchaseItems implements Action {
  readonly type = PURCHASE_ITEMS;

  constructor(readonly payload: { id: string; quantity: number }[]) {}
}

export type All = RemoveItem | RemoveAll | PurchaseItems;
