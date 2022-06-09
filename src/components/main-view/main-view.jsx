import React from 'react';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Login from '../login-view/login-view';

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      user: "",
      movies: [],
      selectedMovie: null
    }
    this.onLoggedIn = this.onLoggedIn.bind(this);
  }
  
  getMovies(){
    axios.get('https://movieapi-0162.herokuapp.com/movies', {
      headers: {
        "Authorization": "Bearer "+ localStorage.getItem("token")
      }
    })
    .then(response => {
      this.setState({
        movies: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount(){
   /* axios.get('https://movieapi-0162.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      }); */
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onBackClick(newSelectedMovie) 
  { 
    this.setSelectedMovie(newSelectedMovie);
  }

  onLoggedIn (Username, Password) {
    axios.post(`https://movieapi-0162.herokuapp.com/login?Username=${Username}&Password=${Password}`)
    .then(response => {
      this.setState({
        user: response.data.user.Username
      });
      localStorage.setItem("token", response.data.token );
      localStorage.setItem("user", response.data.user.Username );
      this.getMovies()
    })
    .catch(error => {
      console.log(error);
    });

  }
  render() {
    const { movies, selectedMovie, user } = this.state;
    console.log(movies)
    if (!user) return <Login onLoggedIn={this.onLoggedIn} />

    if (selectedMovie) return <MovieView movie={selectedMovie} />;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={this.onBackClick}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}
export default MainView;