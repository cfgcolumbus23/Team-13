import { useState } from 'react';
import './Loginpage.css';

function Loginpage() {
  // State to store user's login information
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  // Update state based on user input
  function handleInput(event) {
    const { id, value } = event.target;
    setLoginData(prevData => ({ ...prevData, [id]: value }));
  }

  // Send login data to server
  function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission behavior
    fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    })
    .then(response => response.ok ? response.json() : Promise.reject('Failed to login'))
    .then(responseData => console.log(responseData))
    .catch(error => console.error('Login error:', error));
  }

  // ITs so late right now these commits hopefully work :)
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <h2 className="text-center">Login</h2>
          <form id="loginForm" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={handleInput} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={handleInput}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
