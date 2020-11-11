import src from '*.avif';
import React, { Component } from 'react';
import { cellSize } from '../../utility';

class WallIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style1 = {
      backgroundImage: url('../../../../images/wall.png'),
    };
    return <div style={style1}></div>;
  }
}

export default WallIcon;
