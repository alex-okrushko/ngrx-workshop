import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as actions from '../actions';

import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Store } from '@ngrx/store';

import * as selectors from '../selectors';
import { GlobalState } from '../reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private readonly productService: ProductService,
    private readonly store: Store<GlobalState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new actions.FetchProducts());
    this.products$ = this.store.select(selectors.getProducts);
  }
}
