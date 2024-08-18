import { formatDate } from '../../utils/formatDate';

const Reviews = ({ review }) => {
  const { text: reviewText, rating, author, date } = review;

  return (
    <p>
      {reviewText}
      <br />
      {rating} /5 Star -- {author}, {formatDate(date)}
    </p>
  );
};

export default Reviews;
