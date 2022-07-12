import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Routes } from "react-router-dom";
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import MoviesList from '../movies-view/movies-view';
import "../../index.scss"
import { Container, Row, Col, Button, Header } from 'react-bootstrap';
import { Login } from '../login-view/login-view';
import { Registration } from '../registration-view/registration-view';
import DirectorView from '../director-view/director-view';
import GenreView from '../genre-view/genre-view';

 const url = 'https://movieapi-0162.herokuapp.com/';

export class MainView extends React.Component{
      constructor() {
        super();
        this.state = {
          movies: [],
          selectedMovie: null,
          user: '',
          reg: false,
        }
        this.login = this.login.bind(this);
        this.getMovies = this.getMovies.bind(this);
        this.onMovieClick = this.onMovieClick.bind(this)
      }
    
     login(username, password){
        axios.post(`${url}login?Username=${username}&Password=${password}`)
        .then(result=>{
          localStorage.setItem('token', result.data.token)
          this.setState({
            user: result.data.user.Username
          });
          this.getMovies();
          window.location.replace("/movies")
        })
      }

      register(username, password, birthday, email){
        axios.post(`${url}users/register`, {Username: username, Password: password, Email: email, Birthdate: birthday
        })
        .then(result=>{
          alert("Registered!") 
          window.location.replace("/")
        })      
      }

      getMovies() {
        axios.get(`${url}movies`, {
          headers : {
            Authorization : 'Bearer '+localStorage.getItem('token')
          }
        }).then(result=>this.setState({movies: result.data}) )
        .catch(function (error) {
          console.log(error);
        });
      }

      onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
          user: null
        });
      }

      componentDidMount() {
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
          this.setState({
            user: localStorage.getItem('user')
          });
          this.getMovies(accessToken);
        }
      }

      setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }

      onMovieClick(newSelectedMovie) {
         console.log(newSelectedMovie);
         
         this.setState({
          selectedMovie: newSelectedMovie
        });
        
        }
      onBackClick(newSelectedMovie) { this.setSelectedMovie(newSelectedMovie); }
      // 

    render() {
      const { movies, selectedMovie, user, reg } = this.state;      
        return (
          <div>
            <Router>
            <header>
              <h1 style={{color: 'red'}}>MyFlix</h1>
            <Button variant="danger" onClick={() => { this.onLoggedOut() }} style={{marginBottom: 20, float: 'right'}}>Logout</Button>
            </header>
            <Routes>
            <Route exact={true} path="/" element={ <Login login={this.login} />} >
            </Route>
            <Route exact={true} path="/register" element={ <Registration register = {this.register} />} >
           </Route>
            <Route exact={true} path="/movies" element={ <MoviesList onMovieClick={this.onMovieClick}
            onBackClick={this.onBackClick}  movies={movies} selectedMovie={selectedMovie} />} >
           </Route>

           <Route exact={true} path="/director/:name" element={ <DirectorView  />} >
           </Route>

           <Route exact={true} path="/genre/:name" element={ <GenreView />} >
           </Route>

          </Routes>
            </Router>
          </div>
        );
      }

    }
    


    
  