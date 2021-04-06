import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import './index.css';

import Login from "./Login";
import App from "./App";
import Game from "./Game";

export default function Home() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/game/:id">
            <Game />
          </Route>
        </Switch>
    </Router>
  );
}

// ========================================


ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
