import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { StarsModule } from '../common/stars/stars.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    StarsModule,
    RouterModule,
    MatProgressBarModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
