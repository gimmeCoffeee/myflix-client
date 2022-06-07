import React from 'react';

class Registration extends React.Component {
    state = {  } 
    render() { 
        return (
            <form action="">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

    <label for="psw-repeat"><b>Username</b></label>
    <input type="text" placeholder="username" name="username" id="username" required />
    <label for="psw-repeat"><b>Birthday</b></label>
    <input type="date" placeholder="birthday" name="birthday" id="birthday" required></input>
    <hr />

    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
        );
    }
}
 
export default Registration;