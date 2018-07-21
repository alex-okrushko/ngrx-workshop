import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Store } from '@ngrx/store';
import { SetProducts } from '../actions';
import { data } from '../services/product-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private readonly productService: ProductService,
    private readonly store: Store<{ products: Product[] }>
  ) {}

  ngOnInit() {
    this.store.dispatch(new SetProducts(data));
    this.products$ = this.store.select(state => state.products);
  }
}
