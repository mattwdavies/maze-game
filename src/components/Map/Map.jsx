import React from 'react';
import HealthBar from '../HealthBar/HealthBar';
import WealthBar from '../WealthBar/WealthBar';
import GameIcon from '../Icons/GameIcon/GameIcon';
import WallIcon from '../Icons/GameIcon/WallIcon';
import './Map.css';
import player from '../../images/player.png';
import threat from '../../images/threat.png';
import treasure from '../../images/treasure.png';
import wall from '../../images/wall.png';
import stairs from '../../images/stairs-down.png';
import wallMapPosition, {
  threatMapPosition,
  treasureMapPosition,
  cellSize,
  stairsDownPosition,
} from '../../config/level1';

class GameLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      entityStates: {
        threat: <GameIcon icon={threat} alt="threat" />,
        empty: ' ',
        player: <GameIcon icon={player} alt="player" />,
        treasure: <GameIcon icon={treasure} alt="treasure" />,
        wall: <WallIcon icon={wall} alt="wall" />,
        stairs: <GameIcon icon={stairs} alt="stairs" />,
      },
      health: 10,
      wealth: 0,
    };
    this.setThreats = this.setThreats.bind(this);
    this.setTreasure = this.setTreasure.bind(this);
    this.setWalls = this.setWalls.bind(this);
    this.setPlayerPosition = this.setPlayerPosition.bind(this);
    this.setBoard = this.setBoard.bind(this);
    this.setStairs = this.setStairs.bind(this);
  }
  UNSAFE_componentWillMount() {
    let { mapHeight, mapWidth, playerPosition } = this.props;
    let board = [];

    for (let i = 0; i < mapHeight; i++) {
      let innerArray = []; //dont use ambiguous names

      for (let j = 0; j < mapWidth; j++) {
        let obj = {};
        obj['x'] = i;
        obj['y'] = j;
        if (playerPosition.x === i && playerPosition.y === j) {
          obj['state'] = this.state.entityStates.player;
        } else {
          obj['state'] = this.state.entityStates.empty;
        }

        let temp = [];
        innerArray.push(obj);
        temp.push(obj);
      }
      board.push(innerArray);
    }
    this.setState(
      {
        board: board,
        playerPosition,
      },
      () => {
        this.setPlayerPosition(playerPosition);
        this.setThreats(this.props.threatPosition);
        this.setTreasure(this.props.treasurePosition);
        this.setWalls(this.props.wallPosition);
        this.setStairs(this.props.stairsPosition);
      }
    );
  }
  setPlayerPosition(playerPosition) {
    let { board } = this.state;
    board[playerPosition.x][playerPosition.y][
      'state'
    ] = this.state.entityStates.player;
    this.setState({
      board,
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) {
    } else {
      this.setBoard(nextProps);
    }
  }

  setBoard(props) {
    let { playerPosition, prevPlayerPos } = props;
    let { board } = this.state;
    let newPlayerPos = playerPosition;
    if (
      board[newPlayerPos.x][newPlayerPos.y]['state'] ===
      this.state.entityStates.threat
    ) {
      let newHealth = this.state.health;
      console.log('Threat hit!');
      --newHealth;
      playerPosition['x'] = 0;
      playerPosition['y'] = 0;
      this.setState({
        health: newHealth,
      });
    }
    if (
      board[newPlayerPos.x][newPlayerPos.y]['state'] ===
      this.state.entityStates.wall
    ) {
      console.log('Wall');
      playerPosition['x'] = prevPlayerPos['x'];
      playerPosition['y'] = prevPlayerPos['y'];

      this.setState({});
    }
    if (
      board[newPlayerPos.x][newPlayerPos.y]['state'] ===
      this.state.entityStates.treasure
    ) {
      let newWealth = this.state.wealth;
      console.log('+1 Wealth');
      ++newWealth;
      board[newPlayerPos.x][newPlayerPos.y][
        'state'
      ] = this.state.entityStates.player;
      board[prevPlayerPos.x][prevPlayerPos.y][
        'state'
      ] = this.state.entityStates.empty;
      this.setState({
        wealth: newWealth,
      });
    }
    if (
      board[newPlayerPos.x][newPlayerPos.y]['state'] ===
      this.state.entityStates.empty
    ) {
      board[newPlayerPos.x][newPlayerPos.y][
        'state'
      ] = this.state.entityStates.player;
      board[prevPlayerPos.x][prevPlayerPos.y][
        'state'
      ] = this.state.entityStates.empty;
    }
  }
  setThreats(threatPosition) {
    let { board } = this.state;
    for (let i = 0; i < threatMapPosition.length; i++) {
      board[threatPosition[i].y][threatPosition[i].x][
        'state'
      ] = this.state.entityStates.threat;
    }
    this.setState({
      board,
    });
  }

  setTreasure(treasurePosition) {
    let { board } = this.state;
    for (let i = 0; i < treasureMapPosition.length; i++) {
      board[treasurePosition[i].y][treasurePosition[i].x][
        'state'
      ] = this.state.entityStates.treasure;
    }
    this.setState({
      board,
    });
  }

  setWalls(wallPosition) {
    let { board } = this.state;
    for (let i = 0; i < wallMapPosition.length; i++) {
      board[wallPosition[i].y][wallPosition[i].x][
        'state'
      ] = this.state.entityStates.wall;
    }
    this.setState({
      board,
    });
  }

  setStairs(stairsPosition) {
    let { board } = this.state;
    for (let i = 0; i < stairsDownPosition.length; i++) {
      board[stairsPosition[i].y][stairsPosition[i].x][
        'state'
      ] = this.state.entityStates.stairs;
    }
    this.setState({
      board,
    });
  }
  render() {
    let { board } = this.state;
    return (
      <>
        <HealthBar health={this.state.health} />
        <WealthBar wealth={this.state.wealth} />
        <table cellSpacing="0" border="3px solid black">
          <tbody>
            {board.map((item, index) => (
              <tr key={index}>
                {item.map((innerItem, innerIndex) => (
                  <td
                    className="cell-back"
                    key={innerIndex}
                    style={{
                      padding: 0,
                      border: '0px',
                      margin: 0,
                      width: cellSize,
                      height: cellSize,
                      backgroundSize: 'cover',
                    }}
                  >
                    {innerItem.state}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default GameLogic;
