import { Actions, Effect, ofType } from '@ngrx/effects';
import { CartService } from '../services/cart.service';
import { Action, Store } from '@ngrx/store';
import { Observable, defer, of, timer } from 'rxjs';

import * as cartActions from './actions';
import * as productDetailsActions from '../product-details/actions';
import * as cartDetailsActions from '../cart-details/actions';
import {
  switchMap,
  map,
  catchError,
  concatMap,
  withLatestFrom,
  mapTo,
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import * as selectors from './selectors';
import { Router } from '@angular/router';

const REFRESH_CART_ITEMS_INTEVAL_MS = 20 * 1000; // 20 seconds

@Injectable()
export class CartEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly cartService: CartService,
    private readonly store: Store<{}>,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
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
    ofType<productDetailsActions.AddItem>(productDetailsActions.ADD_ITEM),
    concatMap(({ itemId }) =>
      this.cartService.addToCart(itemId).pipe(
        map(() => new cartActions.AddItemSuccess()),
        // passing the itemId to the Error, so it can be restored.
        catchError(() => of(new cartActions.AddItemError(itemId)))
      )
    )
  );

  @Effect()
  removeCartItem: Observable<Action> = this.actions$.pipe(
    ofType<cartDetailsActions.RemoveItem>(cartDetailsActions.REMOVE_ITEM),
    concatMap(({ itemId }) =>
      this.cartService.removeOne(itemId).pipe(
        map(() => new cartActions.RemoveItemSuccess()),
        // passing the itemId to the Error, so it can be restored.
        catchError(() => of(new cartActions.RemoveItemError(itemId)))
      )
    )
  );

  @Effect()
  removeAllItems: Observable<Action> = this.actions$.pipe(
    ofType<cartDetailsActions.RemoveAll>(cartDetailsActions.REMOVE_ALL),
    withLatestFrom(this.store.select(selectors.getCartItemsIds)),
    concatMap(([action, ids]) =>
      this.cartService.removeAll().pipe(
        map(() => new cartActions.RemoveAllSuccess()),
        // passing the itemId to the Error, so it can be restored.
        catchError(() => of(new cartActions.RemoveAllError(ids)))
      )
    )
  );

  @Effect()
  purchaseItems: Observable<Action> = this.actions$.pipe(
    ofType<cartDetailsActions.PurchaseItems>(cartDetailsActions.PURCHASE_ITEMS),
    concatMap(({ payload }) =>
      this.cartService.purchase(payload).pipe(
        map(() => new cartActions.PurchaseItemsSuccess()),
        catchError(() => of(new cartActions.PurchaseItemsError()))
      )
    )
  );

  @Effect()
  handlePurchaseSuccess: Observable<Action> = this.actions$.pipe(
    ofType<cartActions.PurchaseItemsSuccess>(
      cartActions.PURCHASE_ITEMS_SUCCESS
    ),
    map(() => {
      this.router.navigate(['/home']);
      // Setting the timeout, so that angular would re-run change detection.
      setTimeout(
        () =>
          this.snackBar.open('Items purchased!', 'Success', {
            duration: 2500,
          }),
        0
      );
    }),
    mapTo(new cartActions.FetchCartItems())
  );

  @Effect({ dispatch: false })
  purchaseItemsError = this.actions$.pipe(
    ofType<cartActions.PurchaseItemsError>(cartActions.PURCHASE_ITEMS_ERROR),
    map(() => {
      // Setting the timeout, so that angular would re-run change detection.
      setTimeout(
        () =>
          this.snackBar.open('Could not purchase items', 'Error', {
            duration: 2500,
          }),
        0
      );
    })
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
    timer(0, REFRESH_CART_ITEMS_INTEVAL_MS).pipe(
      map(() => new cartActions.FetchCartItems())
    )
  );
}
