import { Container } from 'reactstrap';
import WatchMoviesList from '../features/watchMovies/WatchMoviesList';
import SubHeader from '../components/SubHeader';

const WatchMoviesPage = () => {
  return (
    <Container>
      <SubHeader current='Movies Watch List' />
      <WatchMoviesList />
    </Container>
  );
};

export default WatchMoviesPage;
