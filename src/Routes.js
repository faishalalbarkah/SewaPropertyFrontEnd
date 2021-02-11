import React from "react";
import Home from "./user/home";
import Profile from "./user/profile";
import Booking from "./user/booking";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile" component={Profile} />
        <Route path="/booking" component={Booking} />
      </Switch>
    </Router>
  );
}

export default Routes;
