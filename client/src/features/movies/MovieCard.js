import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addWatchMovies } from '../watchMovies/watchMoviesSlice';

const MovieCard = ({ movie }) => {
  const { id, image, name, year, genre } = movie;
  const dispath = useDispatch();

  const watchHandle = () => {
    dispath(addWatchMovies(movie));
  };

  return (
    <Card width='200px' height='450px'>
      <Link to={`${id}`}>
        <CardImg src={image} alt={name} width='200px' height='450px' />
      </Link>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>
          Genre: {genre}
          <sapan className='ms-5'>Year: {year}</sapan>
        </CardText>
        <CardText>
          <CardLink href={`${id}`}>
            <Button color='primary' className='ms-3'>
              More Info
            </Button>
          </CardLink>
          <Button color='primary' className='ms-5' onClick={watchHandle}>
            Watch
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
