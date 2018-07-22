import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as cartActions from '../cart/actions';
import * as ratingActions from '../rating/actions';
import * as selectors from '../selectors';
import * as actions from './actions';
import * as ratingSelectors from '../rating/selectors';
import { LoadableRatingScore } from '../model/rating';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product$ = this.store.select(selectors.getCurrentProduct);

  customerRating$: Observable<LoadableRatingScore> = this.store.select(
    ratingSelectors.getCurrentProductRating
  );

  constructor(
    private readonly store: Store<{}>,
    private readonly location: Location
  ) {
    this.store.dispatch(new actions.FetchCurrentProduct());
    this.store.dispatch(new ratingActions.GetCurrentProductRating());
  }

  setRating(id: string, rating: number) {
    this.store.dispatch(new ratingActions.SetRating({ id, rating }));
  }

  addToCart(productId: string) {
    this.store.dispatch(new cartActions.AddItem(productId));
  }

  back() {
    this.location.back();
  }
}
