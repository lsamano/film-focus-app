import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/movies" component={MoviesContainer} />
          <Route path="/" render={() => <Redirect to="/movies"/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
