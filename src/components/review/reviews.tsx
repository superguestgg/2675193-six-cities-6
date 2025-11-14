import {Fragment} from 'react';
import ReviewComponent from './reviewComponent.tsx';
import {Review} from '../../types/review.ts';

type ReviewsProps = {
  reviews: Review[];
}

export default function Reviews({reviews} : ReviewsProps) {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review: Review) => <ReviewComponent key={review.id} {...review}/>)}
      </ul>
    </Fragment>);
}
