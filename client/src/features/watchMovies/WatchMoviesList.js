import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import WatchMovies from './WatchMovies';
import { selectAllWatchMovies } from './watchMoviesSlice';

const WatchMoviesList = () => {
  const watchMovies = useSelector(selectAllWatchMovies);
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

  if (watchMovies && watchMovies.length > 0) {
    return (
      <Row className='ms-auto'>
        {watchMovies.map((watchMovie) => {
          return (
            <Col md='5' lg='3' className='m-4'>
              <WatchMovies key={watchMovie.id} watchMovie={watchMovie} />
            </Col>
          );
        })}
      </Row>
    );
  }
  return (
    <Col md='5' className='m-1'>
      <h4>No Movies added to Watch List.</h4>
    </Col>
  );
};

export default WatchMoviesList;
