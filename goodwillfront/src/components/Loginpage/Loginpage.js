import './Loginpage.css';
function Loginpage() {
    return (
      <div className="login-pane">
        <h1 className='login-label'>User Login</h1>
      <form>
        <div className="input-field">
          <div className='input-label'>Username</div>
          <input type="text" id="username" />
        </div>
        <div className="input-field">
        <div className='input-label'>Password</div>
          <input type="password" id="password" />
        </div>
        <button className="login-btn">Login</button>
      </form>
    </div>
    );
  }
  
  export default Loginpage;