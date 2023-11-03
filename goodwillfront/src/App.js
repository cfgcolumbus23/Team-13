import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Homepage/Homepage.js';
import Login from './components/Loginpage/Loginpage.js';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </div>
  );
}

export default App;
