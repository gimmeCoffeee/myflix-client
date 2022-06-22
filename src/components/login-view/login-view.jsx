import React from 'react';
import { Button, Form } from 'react-bootstrap';


import "../../index.scss"

export class Login extends React.Component {
 
    state = {
        username: '',
        password: ''
    }
  
  render() {
    const { login, register } = this.props;

    return (
      <Form onSubmit={(evt)=>{evt.preventDefault();login(this.state.username, this.state.password) } }>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" name="Username" onChange={(e) => this.setState({username: e.target.value})} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" name="Password" onChange={(e) => this.setState({password: e.target.value})} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Button variant="primary" type="button"  onClick={()=>register()}>
        Register
      </Button>
    </Form>
    );
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }

}
