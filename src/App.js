import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SettingsScreen from './containers/SettingsScreen';
import MainScreen from './containers/MainScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={MainScreen} />
          <Route path="/settings" exact component={SettingsScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
