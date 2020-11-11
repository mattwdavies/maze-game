import React, { Component } from 'react';
import { cellSize } from '../../../config/level2';

class GameIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img
          src={this.props.icon}
          alt={this.props.alt}
          height={cellSize - cellSize * 0.1}
          width={cellSize - cellSize * 0.1}
        ></img>
      </div>
    );
  }
}

export default GameIcon;
