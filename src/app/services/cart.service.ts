import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { delayWhen, map, shareReplay, switchMap, tap } from 'rxjs/operators';

import { StorageService } from './storage.service';

const CART_PREFIX = 'cart:';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsChanged$ = new BehaviorSubject<void>(undefined);

  constructor(private readonly storageService: StorageService) {}

  addToCart(id: string): Observable<void> {
    return this.getCartItems().pipe(
      switchMap(
        ids =>
          Math.random() < 0.25
            ? throwError('Internal Error')
            : this.storageService.set(CART_PREFIX, [...ids, id].join(','))
      )
    );
  }

  removeOne(id: string): void {
    this.getCartItems()
      .pipe(
        delayWhen(ids => {
          ids.splice(ids.indexOf(id), 1);
          return this.storageService.set(CART_PREFIX, ids.join(','));
        })
      )
      .subscribe(() => this.itemsChanged$.next(undefined));
  }

  removeAll() {
    this.storageService
      .set(CART_PREFIX, '')
      .subscribe(() => this.itemsChanged$.next(undefined));
  }

  purchase(purchaseItems: { id: string; quantity: number }[]) {
    this.getCartItems()
      .pipe(
        delayWhen(ids => {
          for (const item of purchaseItems) {
            for (let i = 0; i < item.quantity; i++) {
              ids.splice(ids.indexOf(item.id), 1);
            }
          }
          return this.storageService.set(CART_PREFIX, ids.join(','));
        })
      )
      .subscribe(() => this.itemsChanged$.next(undefined));
  }

  getCartItems(): Observable<string[]> {
    return this.storageService
      .fetch(CART_PREFIX)
      .pipe(map(ids => (ids ? ids.split(',') : [])));
  }
}
