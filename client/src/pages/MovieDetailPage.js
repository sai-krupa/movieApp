import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectMovieById } from '../features/movies/moviesSlice';
import MovieDetail from '../features/movies/MovieDetail';
import ReviewsList from '../features/reviews/ReviewsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const movie = useSelector(selectMovieById(movieId));
  console.log(movie);

  const isLoading = useSelector((state) => state.movies.isLoading);
  const errMsg = useSelector((state) => state.movies.errMsg);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (errMsg) {
    content = <Error errMsg={errMsg} />;
  } else {
    content = (
      <>
        <MovieDetail movie={movie} />
        <ReviewsList movieId={movieId} />
      </>
    );
  }

  return (
    <Container>
      {movie && <SubHeader current={movie.name} detail={true} />}
      <Row>{content}</Row>
    </Container>
  );
};

export default MovieDetailPage;
