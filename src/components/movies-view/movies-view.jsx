import React from 'react';
import { Container, Row, Col, Button, Header } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

const MoviesList = ({selectedMovie, movies, onBackClick, onMovieClick}) => {
  return (
    <div className="main-view">
      {selectedMovie
        ?
          <Row className="justify-content-md-center">
            <Col md={8}>
              <MovieView movie={selectedMovie} onBackClick={() => onBackClick(selectedMovie)}/>
            </Col>
          </Row>
        : 
        <Row className="justify-content-md-center">
          {
            movies.map(movie => (
          <Col md={3}>
            <MovieCard key={movie._id} movie={movie} onMovieClick={ () => onMovieClick(movie) }/>
            </Col>
       ))
        }
        </Row>
      }
    </div>
  )
}

export default MoviesList