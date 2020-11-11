import React, { Component } from 'react';
import { cellSize } from '../../../config/level2';

class WallIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img
          src={this.props.icon}
          alt={this.props.alt}
          height={cellSize}
          width={cellSize}
        ></img>
      </div>
    );
  }
}

export default WallIcon;
