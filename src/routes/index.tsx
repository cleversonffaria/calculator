import React from "react";

import { Switch, Route } from "react-router-dom";

import CalculatorTwo from "src/pages/CalculatorTwo";
import CalculatorOne from "src/pages/CalculatorOne";
import Home from "src/pages/home";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/calculator-one" component={CalculatorOne} />
    <Route exact path="/calculator-two" component={CalculatorTwo} />
  </Switch>
);

export default Routes;
