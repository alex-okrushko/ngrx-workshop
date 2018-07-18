import {Action} from '@ngrx/store';
import {Product} from './model/product';
import {data} from './services/product-data';

type ProductState = Product[];
const initState: ProductState = data;

export function reducer(
    state: ProductState = initState, action: Action): ProductState {
  return state;
}
