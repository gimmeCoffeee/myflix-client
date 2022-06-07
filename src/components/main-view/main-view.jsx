import React, {useState} from 'react';
import axios from 'axios';
import { Registration } from '../registration-view/registration-view';
import { Login } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export function MainView() {

  const[movies, setMovies] = useState([]);
  const[selectedMovie, setselectedMovie] = useState([])

  function setSelectedMovie(newSelectedMovie) {
    setselectedMovie(newSelectedMovie)
  }

 function getAllMovies() {
    axios.get('https://movieapi-0162.herokuapp.com/movies', {
      headers: {
        Authorization:  'Bearer ' +localStorage.getItem('token')
      }
    })
    .then(response => {
      setMovies( response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }

  function onRegistration(user)

  }

  function onLoggedIn(user) {
    console.log(user)
    axios.post(`https://movieapi-0162.herokuapp.com/login?Username=${user.Username}&Password=${user.Password}`)
    .then(response => {
      console.log(response.data)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', response.data.user.Username)
      getAllMovies();
    })
    .catch(error => {
      console.log(error);
    });
   
  }
   // const { movies, selectedMovie } = this.state;
    console.log(movies)
    if (selectedMovie) return <MovieView movie={selectedMovie} />;
  
    if (movies.length === 0) return <Login onLoggedIn={this.onLoggedIn} />
  
    return (
      <div className="main-view">
      
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }

export default MainView;