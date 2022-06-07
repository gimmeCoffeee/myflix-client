import React, {useState} from 'react';

export function Login(props) {

  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
       
  return (
    <form action="" method="post">
   <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="Username" onChange={(evt) => setUsername(evt.target.value)} required />
    <br />
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  onChange={(evt) => setPassword(evt.target.value)} name="Password" required />
     <br/>     
    <button type="button" onClick={()=>props.onLoggedIn({Username: Username, Password: Password})}>Login</button>
  </div>
</form>
        );
    
}
 
