import React from 'react';
import { MovieView } from '../movie-view/movie-view';
import { Button } from 'react-bootstrap';

import { Card, Col, Container, Row } from "react-bootstrap";

import "../../index.scss"

export class MovieCard extends React.Component {
 
  
  render() {
    console.log(this.props)
    const { movie, onMovieClick } = this.props;

    return (
      <div className="movie-card">
        <div>
          <img className='thumbnail' src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description.slice(0, 10)}</span>
        </div>
        <Button className="movie-button primary" onClick={() => { onMovieClick(movie); }}>{movie.Title}</Button>
        </div>
    );
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }

}
