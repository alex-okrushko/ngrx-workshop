import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ROUTER_FEATURE_KEY } from './routing.module';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './custom-router-serializer';

export const routerFeatureState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>(ROUTER_FEATURE_KEY);

export const routerState = createSelector(
  routerFeatureState,
  featureState => featureState.state
);

export const getRouterParams = createSelector(
  routerState,
  state => state.params
);
