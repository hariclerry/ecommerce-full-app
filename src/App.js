import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "components/pages/homepage/homepage";
import ShopPage from "components/pages/shop/shop"

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        </Switch>
    </Fragment>
  );
}

export default App;
