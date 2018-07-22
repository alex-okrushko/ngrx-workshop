import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';

import { StarsComponent } from './stars.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
  declarations: [StarsComponent],
  exports: [StarsComponent],
})
export class StarsModule {}
