import { Component } from '@angular/core';

import * as actions from './actions';
import { Store } from '@ngrx/store';

import * as selectors from '../selectors';
import { GlobalState } from '../reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$ = this.store.select(selectors.getProducts);
  loading$ = this.store.select(selectors.isProductsLoading);

  constructor(private readonly store: Store<GlobalState>) {
    this.store.dispatch(new actions.FetchProducts());
  }
}
