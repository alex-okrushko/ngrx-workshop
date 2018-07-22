import { Component } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

import { CartService } from '../services/cart.service';
import { Store } from '@ngrx/store';

import * as selectors from './selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItemsCounter$ = this.store
    .select(selectors.getCartItemsCount)
    .pipe(startWith('?'));

  constructor(private readonly store: Store<{}>) {}
}
