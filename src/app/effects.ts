import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as actions from './actions';
import * as homeActions from './home/actions';
import { ProductService } from './services/product.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions<homeActions.All | actions.All>,
    private readonly productService: ProductService,
    private readonly snackBar: MatSnackBar
  ) {}

  @Effect()
  fetchProducts: Observable<Action> = this.actions$.pipe(
    ofType(homeActions.FETCH_PRODUCTS),
    switchMap(() =>
      this.productService.getProducts().pipe(
        map(products => new actions.FetchProductsSuccess(products)),
        catchError(() => of(new actions.FetchProductsError()))
      )
    )
  );

  @Effect({ dispatch: false })
  handleFetchError = this.actions$.pipe(
    ofType(actions.FETCH_PRODUCTS_ERROR),
    map(() => {
      // Setting the timeout, so that angular would re-run change detection.
      setTimeout(
        () =>
          this.snackBar.open('Error fetching products', 'Error', {
            duration: 2500,
          }),
        0
      );
    })
  );
}
