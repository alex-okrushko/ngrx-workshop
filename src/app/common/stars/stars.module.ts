import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { StarsComponent } from './stars.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [StarsComponent],
  exports: [StarsComponent],
})
export class StarsModule {}
