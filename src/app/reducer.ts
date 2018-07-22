import * as actions from './actions';
import * as productActions from './product-details/actions';
import { Product } from './model/product';

import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export interface GlobalState {
  products: ProductState;
}

export type ProductState = EntityState<Product>;

// If your entity's id property is different you can spesify it during
// entity adapter creation.
export const productAdapter: EntityAdapter<Product> = createEntityAdapter();

const initState: ProductState = productAdapter.getInitialState();

export function reducer(
  state: ProductState = initState,
  action: actions.All | productActions.All
): ProductState {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_SUCCESS: {
      return productAdapter.upsertMany(action.payload, state);
    }
    case productActions.FETCH_PRODUCT_SUCCESS: {
      return productAdapter.upsertOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
