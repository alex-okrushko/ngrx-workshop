import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as actions from './actions';
import { ProductService } from './services/product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {}

  @Effect()
  fetchProducts: Observable<Action> = this.actions$.pipe(
    ofType<actions.FetchProducts>(actions.FETCH_PRODUCTS),
    switchMap(() =>
      this.productService
        .getProducts()
        .pipe(map(products => new actions.SetProducts(products)))
    )
  );
}
