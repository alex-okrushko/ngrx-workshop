import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './custom-router-serializer';

export const ROUTER_FEATURE_KEY = 'Router feature';

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

export function getRouterParam(paramName: string) {
  return createSelector(getRouterParams, params => params[paramName]);
}
