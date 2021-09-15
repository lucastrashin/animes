import Lista from "./components/Lista";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Pesquisa from "./components/Pesquisa";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./components/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Header></Header>
          {/*  <Menu /> */}

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
      </ThemeProvider>
    </div>
  );
}

export default App;
