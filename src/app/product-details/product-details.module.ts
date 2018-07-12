import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { StarsModule } from '../common/stars/stars.module';

import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule, StarsModule],
  declarations: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
