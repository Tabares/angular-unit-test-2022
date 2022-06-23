import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';

import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  errorMessage!: string;
  quote$!: Observable<string>;

  constructor(private quoutesService: QuotesService) {}

  ngOnInit(): void {
    // this.getQuote();
  }

  getQuote() {
    this.errorMessage = '';
    this.quote$ = this.quoutesService.getQuote().pipe(
      startWith('...'),
      catchError((err: Error) => {
        setTimeout(() => (this.errorMessage = err.message || err.toString()));

        return of('...');
      })
    );
  }
}
