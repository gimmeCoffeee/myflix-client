import React from 'react';
import { Button, Form } from 'react-bootstrap';


import "../../index.scss"

export class Registration extends React.Component {
 
    state = {
        username: '',
        password: '',
        email: '',
        birthdate: ''
    }
  
  render() {
    const { register, login } = this.props;

    return (
        <Form onSubmit={(evt)=>{evt.preventDefault();register(this.state.username, this.state.password) } }>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" name="Username" onChange={(e) => this.setState({username: e.target.value})} />
        </Form.Group>
  
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="Password" onChange={(e) => this.setState({password: e.target.value})} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" name="Email" onChange={(e) => this.setState({email: e.target.value})} />
        </Form.Group>

        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control type="date" name="Birthday" onChange={(e) => this.setState({birthday: e.target.value})} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="button"  onClick={()=>login()}>
        Login
      </Button>
      </Form>
    );
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }

}
