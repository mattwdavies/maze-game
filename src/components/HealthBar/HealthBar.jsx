import React from 'react';
import { Line } from 'rc-progress';
import './HealthBar.css';

class HealthBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let newPercent = this.props.health * 10;
    return (
      <>
        <h1 className="styled">Health: {this.props.health}</h1>
        <Line
          percent={newPercent}
          strokeWidth="4"
          strokeColor={`rgb(${375 - this.props.health * 25.5}, ${
            this.props.health * 25.5
          }, 20`}
          width="100%"
        />
      </>
    );
  }
}

export default HealthBar;
