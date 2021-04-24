import logo from "./logo.svg";
import "./App.css";
import useFetch from "../src/hooks/FetcHook";
import HomeView from "./views/HomeView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={HomeView} exact path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
