import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteWatchMovies } from './watchMoviesSlice';

const WatchMovies = ({ watchMovie }) => {
  const dispatch = useDispatch();
  const { image, name, year, genre } = watchMovie;

  const handleDeleteToFavorites = () => {
    dispatch(deleteWatchMovies(watchMovie));
  };

  return (
    <Card width='200px' height='450px'>
      <CardImg src={image} alt={name} width='200px' height='450px' />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>Genre: {genre}</CardText>
        <CardText>Year: {year}</CardText>
        <Button
          color='primary'
          className='ms-5'
          onClick={handleDeleteToFavorites}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default WatchMovies;
