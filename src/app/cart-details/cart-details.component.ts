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
  cartProducts$: Observable<CartProduct[]> = combineLatest(
    this.store.select(selectors.getCartItemsIds),
    this.productService.getProducts(),
    (ids, products) => ({ ids, products })
  ).pipe(
    map(({ ids, products }) => {
      // Reduce ids array to id:quantity Indexable
      const idsMap = ids.reduce((acc, id) => {
        const currentQuantity = acc[id] || 0;
        acc[id] = currentQuantity + 1;
        return acc;
      }, {});

      // Fill each id with quantity and product info.
      return Object.keys(idsMap).map(id => ({
        ...products.find(p => p.id === id),
        quantity: idsMap[id],
      }));
    })
  );

  total$ = this.cartProducts$.pipe(
    map(cartProducts =>
      cartProducts.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      )
    )
  );

  constructor(
    private readonly cartService: CartService,
    private readonly productService: ProductService,
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
