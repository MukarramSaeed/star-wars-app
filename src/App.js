import React, { Component } from 'react';
import './App.css';
import Movies from './Movies/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars Movies List</h1>
        <Movies />
      </div>
    );
  }
}

export default App;
