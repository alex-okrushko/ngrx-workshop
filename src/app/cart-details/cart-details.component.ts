import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartProduct } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Store } from '@ngrx/store';
import * as selectors from '../cart/selectors';

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

  constructor(
    private readonly cartService: CartService,
    private readonly store: Store<{}>
  ) {}

  removeOne(id: string) {
    this.cartService.removeOne(id);
  }

  removeAll() {
    this.cartService.removeAll();
  }

  purchase(products: CartProduct[]) {
    this.cartService.purchase(
      products.map(p => ({ id: p.id, quantity: p.quantity }))
    );
  }
}
