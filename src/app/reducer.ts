import {Action} from '@ngrx/store';

import * as actions from './actions';
import {Product} from './model/product';

type ProductState = Product[];
const initState: ProductState = [];

export function reducer(
    state: ProductState = initState, action: actions.All): ProductState {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_SUCCESS: {
      return action.payload;
    }
  }
  return state;
}
