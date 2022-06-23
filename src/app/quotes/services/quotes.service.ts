import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, Observer } from 'rxjs';
import { concatMap, map, retryWhen, switchMap, take } from 'rxjs/operators';

import { Quote } from '../models/quote';

@Injectable()
export class QuotesService {
  constructor(private http: HttpClient) {}

  private nextId = 1;

  getQuote(): Observable<string> {
    return new Observable((observer: Observer<number>) =>
      observer.next(this.nextId++)
    ).pipe(
      switchMap((id: number) => this.http.get<Quote>(`api/quotes/${id}`)),
      map((q: Quote) => q.quote),
      retryWhen((errors) =>
        errors.pipe(
          switchMap((error: HttpErrorResponse) => {
            if (error.status === 404) {
              this.nextId = 1;

              return of(null);
            }

            return throwError(
              () => new Error('Cannot get Heroes quotes from the server')
            );
          }),
          take(2),
          concatMap(() =>
            throwError(() => new Error('There are no Heroes quotes'))
          )
        )
      )
    );
  }
}
