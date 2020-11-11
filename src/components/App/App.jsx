import React, { Component } from 'react';
import PlayMaze from '../MazeLogic/MazeLogic';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'main-app-container'}>
        <PlayMaze />
      </div>
    );
  }
}

export default App;
