import { Product } from '../model/product';
import * as productDetailsActions from '../product-details/actions';

export const CART_FEATURE_KEY = 'Cart feature';

export interface CartFeatureState {
  cart: CartState;
}

export interface CartState {
  cartItemsIds: string[];
}

export const initState: CartState = {
  cartItemsIds: [],
};

export function reducer(
  state: CartState = initState,
  action: productDetailsActions.All
): CartState {
  switch (action.type) {
    case productDetailsActions.ADD_ITEM: {
      const newCartItemsIds = [...state.cartItemsIds, action.itemId];
      return { cartItemsIds: newCartItemsIds };
    }
    default: {
      return state;
    }
  }
}
