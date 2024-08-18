import { Col, Row } from 'reactstrap';
import MovieCard from './MovieCard';
import { selectAllMovies } from './moviesSlice';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const MoviesList = () => {
  const movies = useSelector(selectAllMovies);
  console.log('movies:', movies);

  const isLoading = useSelector((state) => state.movies.isLoading);
  const errMsg = useSelector((state) => state.movies.errMsg);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }

  return (
    <Row className='ms-auto'>
      {movies.map((movie) => {
        return (
          <Col md='5' lg='3' className='m-4' key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        );
      })}
    </Row>
  );
};
export default MoviesList;
