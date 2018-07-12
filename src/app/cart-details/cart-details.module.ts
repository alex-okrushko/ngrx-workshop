import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { CartDetailsComponent } from './cart-details.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [CartDetailsComponent],
})
export class CartDetailsModule {}
