import React from 'react';

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import MovieForm from './components/MovieForm';
import MoviesList from './components/MoviesList';

import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link to="/form">Form</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Switch>
          <Route exact path="/form">
            <MovieForm/>
          </Route>
          <Route exact path="/movies">
            <MoviesList/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
