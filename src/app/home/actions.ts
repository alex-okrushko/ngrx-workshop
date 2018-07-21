import { Action } from '@ngrx/store';

export const FETCH_PRODUCTS = '[Home Page] Fetch Products';
export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;
}

export type All = FetchProducts;
