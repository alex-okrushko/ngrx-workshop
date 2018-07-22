import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RATING_FEATURE_KEY, reducer } from './reducer';
import { RatingEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature(RATING_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RatingEffects]),
  ],
})
export class RatingModule {}
