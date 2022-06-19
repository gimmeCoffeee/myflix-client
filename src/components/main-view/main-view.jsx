import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import "../../index.scss"
import { Container } from 'react-bootstrap';
import { Login } from '../login-view/login-view';

 const url = 'https://movieapi-0162.herokuapp.com/';

export class MainView extends React.Component{
      constructor() {
        super();
        this.state = {
          movies: [],
          selectedMovie: null,
          user: ''
        }
        this.login = this.login.bind(this);
        this.getMovies = this.getMovies.bind(this);
        this.setSelectedMovie = this.setSelectedMovie.bind(this)
      }
    
     login(username, password){
        axios.post(`${url}login?Username=${username}&Password=${password}`)
        .then(result=>{
          localStorage.setItem('token', result.data.token)
          this.setState({
            user: result.data.user.Username
          });
          this.getMovies();
        })
      }

      registration(username, password, birthday, email){
        //axios post request here
      }
       
      getMovies() {
        axios.get(`${url}movies`, {
          headers : {
            Authorization : 'Bearer '+localStorage.getItem('token')
          }
        }).then(result=>this.setState({movies: result.data}) )
      }

    componentDidMount(){
    }

      setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }

    render() {
      const { movies, selectedMovie, user } = this.state;
      console.log(movies)
      if(!user) return <Login login={this.login} />
      if (selectedMovie) return <MovieView movie={selectedMovie} />;
    
      if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    
        return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
             ))
            }
          </div>
        );
      }

    }
    


    
  