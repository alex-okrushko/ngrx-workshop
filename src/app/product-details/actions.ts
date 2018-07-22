import { Action } from '@ngrx/store';

export const ADD_ITEM = '[Product Details] add one item';
export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(readonly itemId: string) {}
}

export type All = AddItem;