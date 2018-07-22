export interface RatingScore {
  id: string;
  rating: number;
}

export interface LoadableRatingScore extends Partial<RatingScore> {
  isLoading: boolean;
}
