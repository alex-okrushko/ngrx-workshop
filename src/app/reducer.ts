import {Action} from '@ngrx/store';

import * as actions from './actions';
import {Product} from './model/product';

export interface GlobalState {
  products: ProductState;
}

export type ProductState = Product[];
const initState: ProductState = [];

export function reducer(
    state: ProductState = initState, action: actions.All): ProductState {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
