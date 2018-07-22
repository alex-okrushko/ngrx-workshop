import * as actions from './actions';
import * as productActions from './product-details/actions';
import * as homeActions from './home/actions';
import { Product } from './model/product';

import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export interface GlobalState {
  product: ProductState;
}

export interface ProductState {
  products: EntityState<Product>;
  isLoading: boolean;
}

// If your entity's id property is different you can spesify it during
// entity adapter creation.
export const productAdapter: EntityAdapter<Product> = createEntityAdapter();

const initState: ProductState = {
  products: productAdapter.getInitialState(),
  isLoading: false,
};

export function reducer(
  state: ProductState = initState,
  action: actions.All | productActions.All | homeActions.All
): ProductState {
  switch (action.type) {
    case homeActions.FETCH_PRODUCTS: {
      return { ...state, isLoading: true };
    }
    case actions.FETCH_PRODUCTS_ERROR: {
      return { ...state, isLoading: false };
    }
    case actions.FETCH_PRODUCTS_SUCCESS: {
      return {
        products: productAdapter.upsertMany(action.payload, state.products),
        isLoading: false,
      };
    }

    case productActions.FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: productAdapter.upsertOne(action.payload, state.products),
      };
    }
    default: {
      return state;
    }
  }
}
