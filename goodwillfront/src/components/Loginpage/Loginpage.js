import './Loginpage.css';
import {useState} from 'react';
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
      fetch('http://localhost:5000/login', {
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
      <div className="login-pane">
        <h1 className='login-label'>User Login</h1>
      <form>
        <div className="input-field">
          <div className='input-label'>Username</div>
          <input type="text" id="username" onChange={handleUsernameInput}/>
        </div>
        <div className="input-field">
        <div className='input-label'>Password</div>
          <input type="password" id="password" onChange={handlePasswordInput}/>
        </div>
        <button className="login-btn" onClick="handleLogin">Login</button>
      </form>
    </div>
    );
  }
  
  export default Loginpage;