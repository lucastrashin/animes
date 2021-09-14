import Lista from "./components/Lista";
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
          <Route path="/pesquisa">
            <Pesquisa></Pesquisa>
          </Route>

          <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/lista">
            <Lista></Lista>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
