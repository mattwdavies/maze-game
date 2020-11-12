import React from 'react';
import { Line } from 'rc-progress';
import './WealthBar.css';

class WealthBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let newPercent = this.props.wealth * 20;
    return (
      <>
        <h1 className="styled">Wealth: {this.props.wealth}</h1>
        <Line
          percent={newPercent}
          strokeWidth="4"
          strokeColor="#f23918"
          width="100%"
        />
      </>
    );
  }
}

export default WealthBar;
