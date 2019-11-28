import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Creator from "./screens/Creator";

function App() {
  return (
    <Router>
      <React.Fragment>
        <nav></nav>
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
