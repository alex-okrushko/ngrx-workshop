import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RoutingModule } from './routing.module';
import { CartModule } from './cart/cart.module';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { ProductDetailsModule } from './product-details/product-details.module';
import { CartDetailsModule } from './cart-details/cart-details.module';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
