import React from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios";

export class MovieView extends React.Component {

  render() {
    const { movie } = this.props;
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
        </div>
    );
  }
}
