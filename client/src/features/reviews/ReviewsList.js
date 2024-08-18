import { Col } from 'reactstrap';
import { selectReviewsByCampsiteId } from './reviewsSlice';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const ReviewsList = ({ movieId }) => {
  const reviews = useSelector(selectReviewsByCampsiteId(movieId));

  const isLoading = useSelector((state) => state.reviews.isLoading);
  const errMsg = useSelector((state) => state.reviews.errMsg);

  if (isLoading) {
    return <Loading />;
  }

  if (errMsg) {
    return <Error errMsg={errMsg} />;
  }

  if (reviews && reviews.length > 0) {
    return (
      <Col md='5' className='m-1'>
        <h4>Reviews</h4>
        {reviews.map((review) => {
          return <Review key={review.id} review={review} />;
        })}
        <ReviewForm movieId={movieId} />
      </Col>
    );
  }
  return (
    <Col md='5' className='m-1'>
      There are no reviews for this movie yet.
    </Col>
  );
};

export default ReviewsList;
