import React from 'react';
import Map from '../Map/Map';
import _ from 'lodash';
import KeyHandler from 'react-key-handler';
import { mapHeightWidth } from '../utility';

class PlayMaze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGameBoard: false,
      boardHeight: mapHeightWidth,
      boardWidth: mapHeightWidth,
      threatPosition: [],
      treasurePosition: [],
      wallPosition: [],
      playerPosition: {
        x: 0,
        y: 0,
      },
      prevPlayerPos: {
        x: 0,
        y: 0,
      },
    };
    this.generateThreats = this.generateThreats.bind(this);
    this.generateTreasure = this.generateTreasure.bind(this);
    this.generateWalls = this.generateWalls.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyRight = this.handleKeyRight.bind(this);
    this.handleKeyLeft = this.handleKeyLeft.bind(this);
    this.setPlayerPosition = this.setPlayerPosition.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  UNSAFE_componentWillMount() {
    this.startGame();
  }

  startGame() {
    this.setPlayerPosition();
    this.generateThreats();
    this.generateTreasure();
    this.generateWalls();
  }
  setPlayerPosition() {
    let playerPosition = {
      x: 0,
      y: 0,
    };
    this.setState({
      playerPosition,
      showGameBoard: true,
    });
  }

  generateThreats() {
    //hardcode these values with json data instead of randomising
    let { threatPosition } = this.state;
    let randomValues = []; //make not random array from json
    let { boardHeight, boardWidth } = this.state;
    let smallest = 0;
    if (Number(boardHeight) < Number(boardWidth)) {
      smallest = boardHeight;
    } else {
      smallest = boardWidth;
    }
    for (let i = 0; i < Math.ceil(smallest / 2); i++) {
      randomValues.push(_.random(0, smallest - 1));
    }
    for (let i = 0; i < randomValues.length; i++) {
      for (let j = 0; j < randomValues.length; j++) {
        let newRandomPosition = {
          x: randomValues[i],
          y: randomValues[j],
        };
        if (!threatPosition.includes(newRandomPosition)) {
          threatPosition.push(newRandomPosition);
        }
      }
    }
    this.setState({
      threatPosition,
    });
  }

  generateTreasure() {
    //hardcode these values with json data instead of randomising
    let { treasurePosition } = this.state;
    let randomValues = [];
    let { boardHeight, boardWidth } = this.state;
    let smallest = 0;
    if (Number(boardHeight) < Number(boardWidth)) {
      smallest = boardHeight;
    } else {
      smallest = boardWidth;
    }
    for (let i = 0; i < Math.ceil(smallest / 2); i++) {
      randomValues.push(_.random(0, smallest - 1));
    }
    for (let i = 0; i < randomValues.length; i++) {
      for (let j = 0; j < randomValues.length; j++) {
        let newRandomPosition = {
          x: randomValues[i],
          y: randomValues[j],
        };
        if (!treasurePosition.includes(newRandomPosition)) {
          treasurePosition.push(newRandomPosition);
        }
      }
    }
    console.log(treasurePosition);
    this.setState({
      treasurePosition,
    });
  }

  generateWalls() {
    //hardcode these values with json data instead of randomising
    let { wallPosition } = this.state;
    let randomValues = [];
    let { boardHeight, boardWidth } = this.state;
    let smallest = 0;
    if (Number(boardHeight) < Number(boardWidth)) {
      smallest = boardHeight;
    } else {
      smallest = boardWidth;
    }
    for (let i = 0; i < Math.ceil(smallest / 2); i++) {
      randomValues.push(_.random(0, smallest - 1));
    }
    for (let i = 0; i < randomValues.length; i++) {
      for (let j = 0; j < randomValues.length; j++) {
        let newRandomPosition = {
          x: randomValues[i],
          y: randomValues[j],
        };
        if (!wallPosition.includes(newRandomPosition)) {
          wallPosition.push(newRandomPosition);
        }
      }
    }
    this.setState({
      wallPosition,
    });
  }

  handleKeyUp(e) {
    e.preventDefault();
    let { playerPosition } = this.state;

    let prevPos = {
      x: playerPosition.x,
      y: playerPosition.y,
    };
    let newX = playerPosition.x;
    if (Number(newX) - 1 >= 0) {
      --newX;
      playerPosition['x'] = newX;
      this.setState({
        playerPosition,
        prevPlayerPos: prevPos,
      });
    }
  }
  handleKeyDown(e) {
    e.preventDefault();
    let { playerPosition, boardHeight } = this.state;

    let prevPos = {
      x: playerPosition.x,
      y: playerPosition.y,
    };

    let newX = playerPosition.x;
    if (Number(newX) + 1 < boardHeight) {
      ++newX;
      playerPosition['x'] = newX;
      this.setState({
        playerPosition,
        prevPlayerPos: prevPos,
      });
    }
  }
  handleKeyRight(e) {
    e.preventDefault();
    let { playerPosition, boardWidth } = this.state;

    let prevPos = {
      x: playerPosition.x,
      y: playerPosition.y,
    };

    let newY = playerPosition.y;
    if (Number(newY) + 1 < boardWidth) {
      ++newY;
      playerPosition['y'] = newY;
      this.setState({
        playerPosition,
        prevPlayerPos: prevPos,
      });
    }
  }
  handleKeyLeft(e) {
    e.preventDefault();
    let { playerPosition } = this.state;

    let prevPos = {
      x: playerPosition.x,
      y: playerPosition.y,
    };
    let newY = playerPosition.y;
    if (Number(newY) - 1 >= 0) {
      --newY;
      playerPosition['y'] = newY;
      this.setState({
        playerPosition,
        prevPlayerPos: prevPos,
      });
    }
  }

  render() {
    return (
      <>
        <KeyHandler keyValue="ArrowUp" onKeyHandle={this.handleKeyUp} />{' '}
        <KeyHandler keyValue="ArrowDown" onKeyHandle={this.handleKeyDown} />{' '}
        <KeyHandler keyValue="ArrowRight" onKeyHandle={this.handleKeyRight} />{' '}
        <KeyHandler keyValue="ArrowLeft" onKeyHandle={this.handleKeyLeft} />{' '}
        {this.state.showGameBoard && (
          <Map
            threatPosition={this.state.threatPosition}
            treasurePosition={this.state.treasurePosition}
            wallPosition={this.state.wallPosition}
            boardWidth={this.state.boardWidth}
            boardHeight={this.state.boardHeight}
            playerPosition={this.state.playerPosition}
            prevPlayerPos={this.state.prevPlayerPos}
            health={this.state.health}
          />
        )}
      </>
    );
  }
}

export default PlayMaze;
