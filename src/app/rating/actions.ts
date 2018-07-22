import { Action } from '@ngrx/store';
import { RatingScore } from '../model/rating';

export const GET_RATING = '[Rating Effects] get rating';
export class GetRating implements Action {
  type: typeof GET_RATING = GET_RATING;
  constructor(readonly id: string) {}
}

export const GET_CURRENT_PRODUCT_RATING =
  '[Product Details] get rating for current product';
export class GetCurrentProductRating implements Action {
  type: typeof GET_CURRENT_PRODUCT_RATING = GET_CURRENT_PRODUCT_RATING;
}

export const GET_RATING_SUCCESS = '[Rating API] get rating success';
export class GetRatingSuccess implements Action {
  type: typeof GET_RATING_SUCCESS = GET_RATING_SUCCESS;
  constructor(readonly score: RatingScore) {}
}

export const GET_RATING_ERROR = '[Rating API] get rating error';
export class GetRatingError implements Action {
  type: typeof GET_RATING_ERROR = GET_RATING_ERROR;
  constructor(readonly id: string) {}
}

export const SET_RATING = '[Product Details] set rating';
export class SetRating implements Action {
  type: typeof SET_RATING = SET_RATING;
  constructor(readonly score: RatingScore) {}
}

export const SET_RATING_SUCCESS = '[Rating API] set rating success';
export class SetRatingSuccess implements Action {
  type: typeof SET_RATING_SUCCESS = SET_RATING_SUCCESS;
}

export const SET_RATING_ERROR = '[Rating API] set rating error';
export class SetRatingError implements Action {
  type: typeof SET_RATING_ERROR = SET_RATING_ERROR;
  constructor(readonly id: string) {}
}

export type All =
  | GetRating
  | GetRatingSuccess
  | GetRatingError
  | GetCurrentProductRating
  | SetRating
  | SetRatingSuccess
  | SetRatingError;
