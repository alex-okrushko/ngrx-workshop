import { Product } from '../model/product';
import * as cartActions from './actions';

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
  action: cartActions.All
): CartState {
  switch (action.type) {
    case cartActions.ADD_ITEM: {
      const newCartItemsIds = [...state.cartItemsIds, action.itemId];
      return {
        cartItemsIds: newCartItemsIds,
      };
    }
    case cartActions.FETCH_CART_ITEMS_SUCCESS: {
      return {
        cartItemsIds: action.itemIds,
      };
    }
    default: {
      return state;
    }
  }
}
