import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './shared/highlight.directive';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesService } from './quotes/services/quotes.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@shared/in-memory-db-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HighlightDirective,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
