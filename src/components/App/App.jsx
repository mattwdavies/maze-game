import React, { Component } from 'react';
import MapLogic from '../MapLogic/MapLogic';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'main-app-container'}>
        <MapLogic />
      </div>
    );
  }
}

export default App;
