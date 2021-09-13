import react from "react";
import Cards from "./components/cards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />

        <Switch>
          <Route path="/Lista">
            <Cards></Cards>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
