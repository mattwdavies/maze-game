import React, { Component } from 'react';
import PlayMaze from './components/PlayMaze/PlayMaze';
class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        <PlayMaze />
      </div>
    );
  }
}

export default App;
