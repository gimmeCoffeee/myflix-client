import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


import "../../index.scss"

export function Registration(props) {
 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthdate] = useState("");
    
    const { register, login } = props;

    return (
        <Form onSubmit={(evt)=>{evt.preventDefault();register(username, password, birthday, email) } }>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control required type="text" name="Username" onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
  
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control required type="password" name="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control required type="text" name="Email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control required type="date" name="Birthday" onChange={(e) => setBirthdate(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="button"  onClick={()=>window.location.replace("/")}>
        Login
      </Button>
      </Form>
    );
    // return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }


