import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Quote from './components/Quote';
import Navigation from './components/Navbar';
import Home from './components/Home';

const Routes = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/calculator" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
