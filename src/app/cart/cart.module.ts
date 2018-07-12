import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  declarations: [CartComponent],
  exports: [CartComponent],
})
export class CartModule {}
