import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import CharacterPage from "./Components/CharacterPage";

//*routes go here
//* 2 routes = dashboard (default) "/" and character "/character/:id"

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/character/:id" component={CharacterPage} />
  </Switch>
);
