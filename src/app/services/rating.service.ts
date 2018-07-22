import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StorageService } from './storage.service';
import { RatingScore } from '../model/rating';

const RATING_PREFIX = 'rating:';

@Injectable({ providedIn: 'root' })
export class RatingService {
  setCustomerRating({ id, rating }: RatingScore): Observable<void> {
    return this.storageService.set(RATING_PREFIX + id, String(rating));
  }

  getCustomerRating(id: string): Observable<null | string> {
    return this.storageService.fetch(RATING_PREFIX + id);
  }

  constructor(private readonly storageService: StorageService) {}
}
