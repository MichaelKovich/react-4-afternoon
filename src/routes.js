// Configure a router in this file:
// Use the following components as routes:
//   ./src/components/Home/Home.js
//   ./src/components/About/About.js
// Use the following combinations of paths and components for your routes:
//   Path: "/" - Component: Home - This path should be exact.
//   Path: "/about" - Component: About.

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
  </Switch>
);
