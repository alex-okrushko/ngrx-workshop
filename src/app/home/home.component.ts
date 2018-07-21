import { Component } from '@angular/core';

import { Product } from '../model/product';
import { Store } from '@ngrx/store';
import { SetProducts } from '../actions';
import { data } from '../services/product-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$ = this.store.select(state => state.products);

  constructor(private readonly store: Store<{ products: Product[] }>) {
    this.store.dispatch(new SetProducts(data));
  }
}
