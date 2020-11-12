import React, { Component } from 'react';
import MapLogic from '../MapLogic/MapLogic';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'main-app-container'}>
        <MapLogic />
        <h1 className={'h1Style'}>
          Use the arrow keys to move your character, collect the 5 treasure
          caskets on each maze. Avoid the goblins, they will send you back to
          square one!
        </h1>
      </div>
    );
  }
}

export default App;
