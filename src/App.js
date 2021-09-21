import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./components/Theme";
import Tentativa3 from "./components/Tentativa3";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/tentativa3">
              <Tentativa3></Tentativa3>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
