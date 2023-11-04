import { useState } from 'react';
import './Loginpage.css';


function Loginpage() {
  const [loginData, setLoginData] = useState({username: "", password: ""});
  
    function handleUsernameInput(event) {
      const {value} = event.target;
      setLoginData({...loginData, "username":value});
    }

    function handlePasswordInput(event) {
      const {value} = event.target;
      setLoginData({...loginData, "password":value});
    } 
    
    function handleLogin() {
      console.log(loginData.username);
      fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 mt-5">
                <h2 className="text-center">Login</h2>
                <form id="loginForm">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={handleUsernameInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={handlePasswordInput}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
    );
  }
  
  export default Loginpage;