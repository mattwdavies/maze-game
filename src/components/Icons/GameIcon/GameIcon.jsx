import React, { Component } from 'react';

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
          height="55"
          width="55"
        ></img>
      </div>
    );
  }
}

export default GameIcon;
