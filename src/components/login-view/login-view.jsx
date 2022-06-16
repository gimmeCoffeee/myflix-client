import React from 'react';
import { Button } from 'react-bootstrap';


import "../../index.scss"

export class Login extends React.Component {
 
    state = {
        username: '',
        password: ''
    }
  
  render() {
    const { login } = this.props;

    return (
      <div className="movie-card">
        
        <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required 
        onChange={(evt)=> this.setState({username: evt.target.value}) } />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required
         onChange={(evt)=> this.setState({password: evt.target.value}) }
         />
      </div>

        <Button className="movie-button primary" onClick={() => { login(this.state.username, this.state.password) }}>Log in</Button>
        </div>
    );
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }

}
