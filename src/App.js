
import "./App.css";
import HomeView from "./views/HomeView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route component={HomeView} exact path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
