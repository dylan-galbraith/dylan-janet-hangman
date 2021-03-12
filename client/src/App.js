import "./App.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";
import axios from "axios";

function App() {



  return (
    <div className="App">
      <HomePage />
      
    </div>
  );
}

export default App;
