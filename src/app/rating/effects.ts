import { Actions, Effect, ofType } from '@ngrx/effects';
import { RatingService } from '../services/rating.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';

import { concatMap, map, catchError, switchMap, first } from 'rxjs/operators';
import * as actions from './actions';
import * as productDetailsActions from '../product-details/actions';
import * as selectors from '../selectors';

@Injectable()
export class RatingEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly ratingService: RatingService,
    private readonly store: Store<{}>
  ) {}

  @Effect()
  getRating: Observable<Action> = this.actions$.pipe(
    ofType<actions.GetRating>(actions.GET_RATING),
    concatMap(({ id }) =>
      this.ratingService.getCustomerRating(id).pipe(
        map(rating => (rating ? Number(rating) : 0)),
        map(rating => new actions.GetRatingSuccess({ id, rating })),
        catchError(() => of(new actions.GetRatingError(id)))
      )
    )
  );

  @Effect()
  setRating: Observable<Action> = this.actions$.pipe(
    ofType<productDetailsActions.SetRating>(productDetailsActions.SET_RATING),
    concatMap(({ score }) =>
      this.ratingService.setCustomerRating(score).pipe(
        map(() => new actions.SetRatingSuccess()),
        catchError(() => of(new actions.SetRatingError(score.id)))
      )
    )
  );

  @Effect()
  getCurrentProductRating: Observable<Action> = this.actions$.pipe(
    ofType<productDetailsActions.GetCurrentProductRating>(
      productDetailsActions.GET_CURRENT_PRODUCT_RATING
    ),
    switchMap(() =>
      this.store.select(selectors.getCurrentProductId).pipe(
        first(),
        map(id => new actions.GetRating(id))
      )
    )
  );
}
