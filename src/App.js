import React, { Component } from 'react';
import './App.css';
import {AppRouter, Home, Navigation} from './components';

class App extends Component {
  render() {
    return (
      <div >
        <h1>MBI Validation App</h1>
        <AppRouter />
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
