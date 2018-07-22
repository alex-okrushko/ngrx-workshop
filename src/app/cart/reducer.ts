import * as actions from './actions';
import * as productDetailsActions from '../product-details/actions';
import * as cartDetailsActions from '../cart-details/actions';

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
  action: actions.All | productDetailsActions.All | cartDetailsActions.All
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
      return { cartItemsIds: newCartItemsIds };
    }
    case cartDetailsActions.REMOVE_ITEM: {
      const indexOfItemId = state.cartItemsIds.indexOf(action.itemId);
      // Remove the element.
      state.cartItemsIds.splice(indexOfItemId, 1);
      // Force array to mutate.
      const newCartItemsIds = [...state.cartItemsIds];
      return { cartItemsIds: newCartItemsIds };
    }
    case actions.REMOVE_ITEM_ERROR: {
      const newCartItemsIds = [...state.cartItemsIds, action.itemId];
      return { cartItemsIds: newCartItemsIds };
    }
    case actions.FETCH_CART_ITEMS_SUCCESS: {
      return { cartItemsIds: action.itemIds };
    }
    case cartDetailsActions.REMOVE_ALL: {
      return { cartItemsIds: [] };
    }
    case actions.REMOVE_ALL_ERROR: {
      return { cartItemsIds: action.itemIds };
    }
    default: {
      return state;
    }
  }
}
