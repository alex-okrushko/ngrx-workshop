import { Injectable } from '@angular/core';
import { defer, Observable, of, throwError } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

import { Product } from '../model/product';

import { data } from './product-data';

function stripDescription(originalData: Product[]) {
  return originalData.map(d => ({ ...d, description: '' }));
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return defer(
      () =>
        Math.random() < 0.25
          ? throwError('Internal Error')
          : of(stripDescription(data)).pipe(delay(1 * 1000))
    );
  }

  getProduct(id: string): Observable<Product> {
    const product = data.find(p => p.id === id);
    return defer(() => of(product).pipe(delay(1 * 1000)));
  }
}
