import * as actions from './actions';
import { Product } from './model/product';

export type ProductState = Product[];
const initState: ProductState = [];

export function reducer(
  state: ProductState = initState,
  action: actions.All
): ProductState {
  switch (action.type) {
    case actions.SET_PRODUCTS: {
      return action.payload;
    }
  }
  return state;
}
