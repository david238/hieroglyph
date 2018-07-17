import React, { Component } from 'react';
import './App.css';
import Board from './containers/BoardBuilder/Board';
import { BrowserRouter } from 'react-router-dom';


class App extends Component { 
  render() {

    return (
      <BrowserRouter>
        <div className="App">
            <Board/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
