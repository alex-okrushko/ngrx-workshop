import { Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StorageService {
  fetch(key: string): Observable<string | null> {
    return defer(() =>
      of(window.localStorage.getItem(key)).pipe(delay(1 * 1000))
    );
  }

  set(key: string, value: string): Observable<void> {
    return defer(() =>
      of(window.localStorage.setItem(key, value)).pipe(delay(1 * 1000))
    );
  }
}
