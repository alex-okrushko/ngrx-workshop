import { createSelector } from '@ngrx/store';
import { GlobalState } from './reducer';
import * as routerSelectors from './router/selectors';

export const getProducts = (state: GlobalState) => state.products;

export const getCurrentProductId = routerSelectors.getRouterParam('productId');

export const getCurrentProduct = createSelector(
  getProducts,
  getCurrentProductId,
  (products, id) => {
    if (id == null) {
      return null;
    }
    return products.find(p => p.id === id);
  }
);
