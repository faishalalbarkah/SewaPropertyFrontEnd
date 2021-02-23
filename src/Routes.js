import React from "react";
import Home from "./user/home";
import Profile from "./user/profile";
import Booking from "./user/booking";
import ProdukDetail from "./user/produkdetail";

//Admin
import HomeAdmin from "./admin/home";
import AddProperty from "./admin/addproperty";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/booking" component={Booking} />
        <Route path="/detailproduk" component={ProdukDetail} />
        <Route path="/HomeAdmin" component={HomeAdmin} />
        <Route path="/CreateProperty" component={AddProperty} />
      </Switch>
    </Router>
  );
}

export default Routes;
