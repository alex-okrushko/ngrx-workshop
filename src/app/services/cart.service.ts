import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {
  delayWhen,
  map,
  shareReplay,
  switchMap,
  tap,
  concatMap,
} from 'rxjs/operators';

import { StorageService } from './storage.service';

const CART_PREFIX = 'cart:';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private readonly storageService: StorageService) {}

  addToCart(id: string): Observable<void> {
    return this.getCartItems().pipe(
      concatMap(
        ids =>
          Math.random() < 0.25
            ? throwError('Internal Error')
            : this.storageService.set(CART_PREFIX, [...ids, id].join(','))
      )
    );
  }

  removeOne(id: string): Observable<void> {
    return this.getCartItems().pipe(
      concatMap(ids => {
        ids.splice(ids.indexOf(id), 1);
        return this.storageService.set(CART_PREFIX, ids.join(','));
      })
    );
  }

  removeAll(): Observable<void> {
    return this.storageService.set(CART_PREFIX, '');
  }

  purchase(
    purchaseItems: { id: string; quantity: number }[]
  ): Observable<void> {
    return this.getCartItems().pipe(
      concatMap(ids => {
        for (const item of purchaseItems) {
          for (let i = 0; i < item.quantity; i++) {
            ids.splice(ids.indexOf(item.id), 1);
          }
        }
        return this.storageService.set(CART_PREFIX, ids.join(','));
      })
    );
  }

  getCartItems(): Observable<string[]> {
    return this.storageService
      .fetch(CART_PREFIX)
      .pipe(map(ids => (ids ? ids.split(',') : [])));
  }
}
