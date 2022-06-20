import React from 'react';
import { Button } from 'react-bootstrap';


import "../../index.scss"

export class Registration extends React.Component {
 
    state = {
        username: '',
        password: '',
        email: '',
        birthdate: ''
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

        <label for="bday"><b>Birthday</b></label>
        <input type="date" placeholder="Enter Birthdate" name="bday" required
         onChange={(evt)=> this.setState({password: evt.target.value}) }
         />

        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required
         onChange={(evt)=> this.setState({password: evt.target.value}) }
         />
      </div>

        <Button className="movie-button primary" onClick={() => { register(this.state.username, this.state.password, this.state.email, this.state.birthdate) }}>Register</Button>
        </div>
    );
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }

}
