import { Actions, Effect, ofType } from '@ngrx/effects';
import { CartService } from '../services/cart.service';
import { Action } from '@ngrx/store';
import { Observable, defer, of, interval } from 'rxjs';

import * as cartActions from './actions';
import { switchMap, map, catchError, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

const REFRESH_CART_ITEMS_INTEVAL_MS = 20 * 1000; // 20 seconds

@Injectable()
export class CartEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly cartService: CartService,
    private readonly snackBar: MatSnackBar
  ) {}

  @Effect()
  fetchCartItems: Observable<Action> = this.actions$.pipe(
    ofType<cartActions.FetchCartItems>(cartActions.FETCH_CART_ITEMS),
    switchMap(() =>
      this.cartService.getCartItems().pipe(
        map(itemsIds => new cartActions.FetchCartItemsSuccess(itemsIds)),
        catchError(() => of(new cartActions.FetchCartItemsError()))
      )
    )
  );

  @Effect()
  addCartItem: Observable<Action> = this.actions$.pipe(
    ofType<cartActions.AddItem>(cartActions.ADD_ITEM),
    concatMap(({ itemId }) =>
      this.cartService.addToCart(itemId).pipe(
        map(() => new cartActions.AddItemSuccess()),
        // passing the itemId to the Error, so it can be restored.
        catchError(() => of(new cartActions.AddItemError(itemId)))
      )
    )
  );

  @Effect({ dispatch: false })
  handleFetchError = this.actions$.pipe(
    ofType<cartActions.AddItemError>(cartActions.ADD_ITEM_ERROR),
    map(() => {
      // Setting the timeout, so that angular would re-run change detection.
      setTimeout(
        () =>
          this.snackBar.open('Could not add item to the cart', 'Error', {
            duration: 2500,
          }),
        0
      );
    })
  );

  @Effect()
  init$: Observable<Action> = defer(() =>
    interval(REFRESH_CART_ITEMS_INTEVAL_MS).pipe(
      map(() => new cartActions.FetchCartItems())
    )
  );
}
