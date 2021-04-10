import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Quote from './Quote';
import Navigation from './Navbar';

const Routes = () => {
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>;
};

export default Routes;
