import "./App.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
