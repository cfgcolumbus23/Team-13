import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Accountpage/Navbar/Navbar.js';
import Home from './components/Homepage/Homepage.js';
import Login from './components/Loginpage/Loginpage.js';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </div>

    
  );
}
export default App;
