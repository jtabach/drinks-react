import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './styles/normalize.css';
import './styles/reset.custom.css';
import './styles/typography.css';

import Catalog from './pages/Catalog';
import Drink from './pages/Drink';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Catalog />
        </Route>
        <Route path="/drink/:id">
          <Drink />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
