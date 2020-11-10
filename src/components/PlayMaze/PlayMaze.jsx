import React from 'react';
import Map from '../Map/Map';
import _ from 'lodash';
import KeyHandler from 'react-key-handler';

class PlayMaze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGameBoard: false,
      boardHeight: 10,
      boardWidth: 10,
      threatPosition: [],
      treasurePosition: [],
      playerPosition: {
        x: 0,
        y: 0,
      },
      prevPlayerPos: {
        x: 0,
        y: 0,
      },
      totalMoves: 0,
    };
    this.generateThreats = this.generateThreats.bind(this);
    this.generateTreasure = this.generateTreasure.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyRight = this.handleKeyRight.bind(this);
    this.handleKeyLeft = this.handleKeyLeft.bind(this);
    this.handleSpaceBar = this.handleSpaceBar.bind(this);
    this.countTotalMoves = this.countTotalMoves.bind(this);
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
    let { threatPosition } = this.state;
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
        if (!threatPosition.includes(newRandomPosition)) {
          threatPosition.push(newRandomPosition);
        }
      }
    }
    console.log(threatPosition);
    this.setState({
      threatPosition,
    });
  }

  generateTreasure() {
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

  countTotalMoves() {
    let newMoves = this.state.totalMoves;
    ++newMoves;
    this.setState({
      totalMoves: newMoves,
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
      this.countTotalMoves();
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
      this.countTotalMoves();
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
      this.countTotalMoves();
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
      this.countTotalMoves();
    }
  }
  handleSpaceBar() {
    console.log('asdasdasas');
  }

  render() {
    return (
      <>
        <KeyHandler keyValue="ArrowUp" onKeyHandle={this.handleKeyUp} />{' '}
        <KeyHandler keyValue="ArrowDown" onKeyHandle={this.handleKeyDown} />{' '}
        <KeyHandler keyValue="ArrowRight" onKeyHandle={this.handleKeyRight} />{' '}
        <KeyHandler keyValue="ArrowLeft" onKeyHandle={this.handleKeyLeft} />{' '}
        <KeyHandler keyValue="SpaceBar" onKeyHandle={this.handleSpaceBar} />
        {this.state.showGameBoard && (
          <Map
            threatPosition={this.state.threatPosition}
            treasurePosition={this.state.treasurePosition}
            boardWidth={this.state.boardWidth}
            boardHeight={this.state.boardHeight}
            playerPosition={this.state.playerPosition}
            prevPlayerPos={this.state.prevPlayerPos}
            totalMoves={this.state.totalMoves}
            health={this.state.health}
          />
        )}
      </>
    );
  }
}

export default PlayMaze;
