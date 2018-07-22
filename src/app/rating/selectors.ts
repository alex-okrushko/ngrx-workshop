import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RatingsState, RATING_FEATURE_KEY, ratingAdapter } from './reducer';
import * as productSelectors from '../selectors';
import { RatingService } from '../services/rating.service';

const featureState = createFeatureSelector<RatingsState>(RATING_FEATURE_KEY);

export const { selectEntities } = ratingAdapter.getSelectors();

const getRatingEntities = createSelector(featureState, selectEntities);

export const getCurrentProductRating = createSelector(
  getRatingEntities,
  productSelectors.getCurrentProductId,
  (ratings, id) => ratings[id]
);
