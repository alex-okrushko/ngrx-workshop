import { Product } from '../model/product';
import * as productDetailsActions from '../product-details/actions';
import * as actions from './actions';

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
  action: actions.All | productDetailsActions.All
): CartState {
  switch (action.type) {
    case productDetailsActions.ADD_ITEM: {
      const newCartItemsIds = [...state.cartItemsIds, action.itemId];
      return { cartItemsIds: newCartItemsIds };
    }
    case actions.ADD_ITEM_ERROR: {
      const indexOfItemId = state.cartItemsIds.indexOf(action.itemId);
      // Remove the element.
      state.cartItemsIds.splice(indexOfItemId, 1);
      // Force array to mutate.
      const newCartItemsIds = [...state.cartItemsIds];
      return {
        cartItemsIds: newCartItemsIds,
      };
    }
    case actions.FETCH_CART_ITEMS_SUCCESS: {
      return {
        cartItemsIds: action.itemIds,
      };
    }
    default: {
      return state;
    }
  }
}
