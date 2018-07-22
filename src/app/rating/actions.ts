import { Action } from '@ngrx/store';
import { RatingScore } from '../model/rating';

export const GET_RATING = '[Rating Effects] get rating';
export class GetRating implements Action {
  readonly type = GET_RATING;
  constructor(readonly id: string) {}
}

export const GET_RATING_SUCCESS = '[Rating API] get rating success';
export class GetRatingSuccess implements Action {
  readonly type = GET_RATING_SUCCESS;
  constructor(readonly score: RatingScore) {}
}

export const GET_RATING_ERROR = '[Rating API] get rating error';
export class GetRatingError implements Action {
  readonly type = GET_RATING_ERROR;
  constructor(readonly id: string) {}
}

export const SET_RATING_SUCCESS = '[Rating API] set rating success';
export class SetRatingSuccess implements Action {
  readonly type = SET_RATING_SUCCESS;
}

export const SET_RATING_ERROR = '[Rating API] set rating error';
export class SetRatingError implements Action {
  readonly type = SET_RATING_ERROR;
  constructor(readonly id: string) {}
}

export type All =
  | GetRating
  | GetRatingSuccess
  | GetRatingError
  | SetRatingSuccess
  | SetRatingError;
