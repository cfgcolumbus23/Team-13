
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Homepage/Homepage.js';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar>
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
      </Navbar>
    </div>

    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
