import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CartProduct } from '../model/product';
import { Store } from '@ngrx/store';
import * as selectors from '../cart/selectors';
import * as cartActions from '../cart/actions';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent {
  cartProducts$: Observable<CartProduct[]> = this.store.select(
    selectors.getCartProducts
  );

  total$ = this.store.select(selectors.getCartTotal);

  constructor(private readonly store: Store<{}>) {}

  removeOne(id: string) {
    this.store.dispatch(new cartActions.RemoveItem(id));
  }

  removeAll() {
    this.store.dispatch(new cartActions.RemoveAll());
  }

  purchase(products: CartProduct[]) {
    this.store.dispatch(new cartActions.PurchaseItems(products));
  }
}
