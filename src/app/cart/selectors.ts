import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartFeatureState, CART_FEATURE_KEY, CartState } from './reducer';

export const cartFeatureState = createFeatureSelector<CartFeatureState>(
  CART_FEATURE_KEY
);

export const cartState = createSelector(cartFeatureState, state => state.cart);

export const getCartItemsIds = createSelector(
  cartState,
  state => state.cartItemsIds
);

export const getCartItemsCount = createSelector(
  getCartItemsIds,
  state => state.length
);
