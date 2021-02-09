import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Home } from "./components/Home";
import { UserProvider } from "./context/UserContext";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
