import React from 'react';

class WealthBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>{this.props.wealth}</h1>;
  }
}

export default WealthBar;
