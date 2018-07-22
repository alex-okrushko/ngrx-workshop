import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RoutingModule } from './router/routing.module';
import { CartModule } from './cart/cart.module';
import {
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
} from '@angular/material';
import { ProductDetailsModule } from './product-details/product-details.module';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects';
import { RatingModule } from './rating/rating.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    RoutingModule,
    CartDetailsModule,
    CartModule,
    ProductDetailsModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    StoreModule.forRoot({ product: reducer }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    RatingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
