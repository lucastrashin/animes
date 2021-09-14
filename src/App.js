import react from "react";
import Cards from "./components/cards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Pesquisa from "./components/Pesquisa";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />

        <Switch>
          <Route path="/Pesquisa">
            <Pesquisa></Pesquisa>
          </Route>

          <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/Lista">
            <Cards></Cards>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
