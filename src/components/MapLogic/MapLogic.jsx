import React from 'react';
import GameLogic from '../Map/Map';
import KeyHandler from 'react-key-handler';
import wallMapPosition, {
  threatMapPosition,
  treasureMapPosition,
  mapHeight,
  mapWidth,
  stairsDownPosition,
} from '../../config/level1';
//always update config in MapLogic, Map, WallIcon and GameIcon
class MapLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGameBoard: false,
      mapHeight: mapHeight,
      mapWidth: mapWidth,
      wallPosition: [],
      threatPosition: [],
      treasurePosition: [],
      playerPosition: {},
      stairsPosition: [],
      prevPlayerPos: {
        x: 0,
        y: 0,
      },
    };
    this.generateMap = this.generateMap.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyRight = this.handleKeyRight.bind(this);
    this.handleKeyLeft = this.handleKeyLeft.bind(this);
  }
  UNSAFE_componentWillMount() {
    this.generateMap();
  }
  generateMap() {
    //hardcode these values with json data instead of randomising
    let {
      treasurePosition,
      threatPosition,
      wallPosition,
      stairsPosition,
    } = this.state;
    let playerPosition = {
      x: 0,
      y: 0,
    };

    treasurePosition = treasureMapPosition;
    threatPosition = threatMapPosition;
    wallPosition = wallMapPosition;
    stairsPosition = stairsDownPosition;
    this.setState({
      playerPosition,
      wallPosition,
      threatPosition,
      treasurePosition,
      stairsPosition,
      showGameBoard: true,
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
    let { playerPosition, mapHeight } = this.state;

    let prevPos = {
      x: playerPosition.x,
      y: playerPosition.y,
    };

    let newX = playerPosition.x;
    if (Number(newX) + 1 < mapHeight) {
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
    let { playerPosition, mapWidth } = this.state;

    let prevPos = {
      x: playerPosition.x,
      y: playerPosition.y,
    };

    let newY = playerPosition.y;
    if (Number(newY) + 1 < mapWidth) {
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
          <GameLogic
            threatPosition={this.state.threatPosition}
            treasurePosition={this.state.treasurePosition}
            stairsPosition={this.state.stairsPosition}
            wallPosition={this.state.wallPosition}
            mapWidth={this.state.mapWidth}
            mapHeight={this.state.mapHeight}
            playerPosition={this.state.playerPosition}
            prevPlayerPos={this.state.prevPlayerPos}
            health={this.state.health}
          />
        )}
      </>
    );
  }
}

export default MapLogic;
