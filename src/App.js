import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import HangmanContainer from './containers/HangmanContainer'
import HangGameContainer from './containers/HangGameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Abandon hope all ye who enter here</h1>
        </header>
        <p className="App-intro">
          Ready to join me in hell?
        </p>
        <main>
          <Route exact path='/' component={HangmanContainer} />
          <Route exact path='/hangman' component={HangGameContainer} />
        </main>
      </div>
    );
  }
}

export default App;
