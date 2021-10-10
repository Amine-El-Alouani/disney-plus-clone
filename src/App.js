import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
