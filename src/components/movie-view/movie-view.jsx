import React from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios";

export class MovieView extends React.Component {

  render() {
    const { movie } = this.props;
    console.log(movie)
    function onBackClick() {
      window.location.reload()
    }
    return (
      <div className="movie-view">
         <Button className="backButton" onClick={() => { onBackClick(null); }}>
         &#8592; Back</Button>
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <Button className="backButton" onClick={() => { window.location.replace("/director/" +movie.Director.Name) }}>
          {movie.Director.Name}</Button>
         <Button className="backButton" onClick={() => { window.location.replace("/genre/" +movie.Genre.Name) }}>
          {movie.Genre.Name}</Button>
        </div>
    );
  }
}
