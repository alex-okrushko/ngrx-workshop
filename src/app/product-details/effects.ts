import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of, defer } from 'rxjs';
import { map, switchMap, catchError, first } from 'rxjs/operators';

import * as actions from './actions';
import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';

import * as selectors from '../selectors';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions<actions.All>,
    private readonly productService: ProductService,
    private readonly store: Store<{}>
  ) {}

  @Effect()
  fetchProduct: Observable<Action> = defer(() =>
    this.actions$.pipe(
      ofType(actions.FETCH_CURRENT_PRODUCT),
      switchMap(() =>
        this.store.select(selectors.getCurrentProductId).pipe(first())
      ),
      switchMap(id =>
        this.productService.getProduct(id).pipe(
          map(product => new actions.FetchProductSuccess(product)),
          catchError(() => of(new actions.FetchProductError()))
        )
      )
    )
  );
}
