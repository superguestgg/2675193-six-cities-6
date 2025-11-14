import {Review} from '../types/review.ts';

export const reviewsMock : Review[] = [
  {
    id: 1,
    user: {
      name: 'fucking max',
      image: 'img/avatar-max.jpg'
    },
    rating: 4,
    text:'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n',
    date: '2019-04-24',
  }
];
