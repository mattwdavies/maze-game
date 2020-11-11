import React, { Component } from 'react';
import { cellSize1 } from '../../../config/level1';
import { cellSize2 } from '../../../config/level2';
import decide from '../../../config/levelDecide';

//extract this into a separate page, import all the stuff above ^ into a new page and then export either map1 or map2 etc
let cellSize = decide == 1 ? cellSize1 : cellSize2;

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
