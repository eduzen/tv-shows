import React, { Component } from 'react';
import Intro from '../Intro';
import Series from '../../containers/Series';
import './App.css';
import 'whatwg-fetch';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">eduzen.com.ar</h1>
        </header>
        <Intro message="Todo de series!"/>
        <Series />
      </div>
    );
  }
}

export default App;
