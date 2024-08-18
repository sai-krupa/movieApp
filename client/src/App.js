import { Routes, Route } from 'react-router-dom';
import './App.css';
import PopularMoviesPage from './pages/PopularMoviesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetailPage from './pages/MovieDetailPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './features/movies/moviesSlice';
import { fetchReviews } from './features/reviews/reviewsSlice';
import WatchMoviesPage from './pages/WatchMoviesPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<PopularMoviesPage />} />
        <Route path='/:movieId' element={<MovieDetailPage />} />
        <Route path='/watchMovies' element={<WatchMoviesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
