import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as actions from '../actions';
import { Product } from '../model/product';
import { Store } from '@ngrx/store';

import * as selectors from '../selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$ = this.store.select(selectors.getProducts);
  loading$ = this.store.select(selectors.isProductsLoading);

  constructor(private readonly store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(new actions.FetchProducts());
  }
}
