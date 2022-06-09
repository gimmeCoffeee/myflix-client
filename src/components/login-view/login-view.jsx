import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super();
    this.login = this.login.bind(this);
  }
    state = {
      Username: "",
      Password: ""
      }
    login = (evt) => {
      evt.preventDefault();
      this.props.onLoggedIn(this.state.Username, this.state.Password);
    } 
    render() { 
        return (
            <form onSubmit={(evt)=> this.login(evt) }>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="Username" required onChange={(evt) => this.setState({Username: evt.target.value})} />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="Password"  onChange={(evt) => this.setState({Password: evt.target.value})} required />

  const handleRegister = (e) => {
      e.preventDefault()
      props.onRegister(true)
  }


  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button
        type="submit"
        onClick={handleRegister}
      >
        Register Here
      </button>
    </form>
  );
}