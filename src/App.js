import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Creator from "./screens/Creator";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/">
            <Creator />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
