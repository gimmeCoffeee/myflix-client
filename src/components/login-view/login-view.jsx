import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';


import "../../index.scss"

export function Login(props) {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      /* Send a request to the server for authentication */
      axios.post('${url}/login', {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log('no such user')
      });
    };
  
    const { login, register } = props;

    return (
      <Form onSubmit={(evt)=>{evt.preventDefault();login(username, password) } }>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control required type="text" name="Username" onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control required type="password" name="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Button variant="primary" type="button"  onClick={()=>register()}>
        Register
      </Button>
    </Form>
    );
  }
