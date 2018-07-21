import { createSelector } from '@ngrx/store';
import { GlobalState } from './reducer';

export const getProducts = (state: GlobalState) => state.products;
