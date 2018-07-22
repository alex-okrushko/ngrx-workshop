import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartFeatureState, CART_FEATURE_KEY } from './reducer';

import * as productSelectors from '../selectors';

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

export const getCartProducts = createSelector(
  getCartItemsIds,
  productSelectors.getProducts,
  (ids, products) => {
    if (ids.length === 0 || products.length === 0) {
      return [];
    }
    // Reduce ids array to id:quantity Indexable
    const idsMap = ids.reduce((acc, id) => {
      const currentQuantity = acc[id] || 0;
      acc[id] = currentQuantity + 1;
      return acc;
    }, {});

    // Fill each id with quantity and product info.
    return Object.keys(idsMap).map(id => ({
      ...products.find(p => p.id === id),
      quantity: idsMap[id],
    }));
  }
);

export const getCartTotal = createSelector(getCartProducts, cartProducts =>
  cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )
);
