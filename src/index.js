import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './reset.custom.css';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
