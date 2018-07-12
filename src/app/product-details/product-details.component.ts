import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';

import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  reFetchTrigger$ = new BehaviorSubject<void>(undefined);

  product$ = this.router.paramMap.pipe(
    map((params: ParamMap) => params.get('productId')),
    filter((id: string | undefined): id is string => !!id),
    switchMap(id => this.productService.getProduct(id))
  );

  customerRating$: Observable<number> = combineLatest(
    this.product$,
    this.reFetchTrigger$,
    // We don't really care about refetch values, so we omit them.
    product => product
  ).pipe(
    map(product => product.id),
    switchMap(id => this.ratingService.getCustomerRating(id)),
    // Map to numbers. If null then rating is 0, which means 'not
    // rated'
    map(rating => (rating ? Number(rating) : 0)),
    // customerRating is used in multiple places in the template.
    // let's share the context.
    shareReplay(1)
  );

  constructor(
    private readonly router: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly ratingService: RatingService,
    private readonly cartService: CartService,
    private readonly location: Location
  ) {}

  setRating(id: string, rating: number) {
    this.ratingService
      .setCustomerRating({
        id,
        rating,
      })
      .subscribe(() => this.reFetchTrigger$.next(undefined));
  }

  addToCart(productId: string) {
    this.cartService.addToCart(productId);
  }

  back() {
    this.location.back();
  }
}
