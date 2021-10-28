import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'antd';

import "antd/dist/antd.css";

import "./index.css";
import Home from "./pages/home";
import { Orders } from "./pages/orders"

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/orders">
                  <Orders />
              </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
