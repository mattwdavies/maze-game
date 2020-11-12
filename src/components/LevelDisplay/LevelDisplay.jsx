import React from 'react';
import './LevelDisplay.css';

class LevelDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1 className="styled">Level: {this.props.level}</h1>
      </>
    );
  }
}

export default LevelDisplay;
