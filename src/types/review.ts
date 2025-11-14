export type Review = {
  id: number;
  user: {
    name: string;
    image: string;
  };
  rating: number;
  text: string;
  date: string;
}
