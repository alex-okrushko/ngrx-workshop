import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { LoadableRatingScore } from '../model/rating';
import * as actions from './actions';
import * as productDetailsActions from '../product-details/actions';

export const RATING_FEATURE_KEY = 'Rating feature';

// because this state doesn't have anything except ratings.
export type RatingsState = EntityState<LoadableRatingScore>;

export const ratingAdapter: EntityAdapter<
  LoadableRatingScore
> = createEntityAdapter();

export const initState: RatingsState = ratingAdapter.getInitialState();

export function reducer(
  state: RatingsState = initState,
  action: actions.All | productDetailsActions.All
): RatingsState {
  switch (action.type) {
    case actions.GET_RATING: {
      return ratingAdapter.upsertOne({ id: action.id, isLoading: true }, state);
    }
    case actions.GET_RATING_SUCCESS: {
      return ratingAdapter.upsertOne(
        { ...action.score, isLoading: false },
        state
      );
    }
    case actions.GET_RATING_ERROR: {
      return ratingAdapter.upsertOne(
        { id: action.id, isLoading: false },
        state
      );
    }
    case productDetailsActions.SET_RATING: {
      return ratingAdapter.upsertOne(
        { ...action.score, isLoading: false },
        state
      );
    }
    case actions.SET_RATING_ERROR: {
      return ratingAdapter.upsertOne(
        { id: action.id, rating: 0, isLoading: false },
        state
      );
    }
    default: {
      return state;
    }
  }
}
