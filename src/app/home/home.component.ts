import { Component } from '@angular/core';

import * as actions from './actions';
import { ProductState } from '../reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$ = this.store.select(state => state.products);

  constructor(private readonly store: Store<{ products: ProductState }>) {
    this.store.dispatch(new actions.FetchProducts());
  }
}
