import React from 'react';
import HealthBar from '../HealthBar/HealthBar';
import WealthBar from '../WealthBar/WealthBar';
import GameIcon from '../Icons/GameIcon/GameIcon';
import './Map.css';
import player from '../../images/player.png';
import threat from '../../images/threat.png';
import treasure from '../../images/treasure.png';
import wall from '../../images/wall.png';
import { cellSize, mapHeightWidth } from '../utility';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      entityStates: {
        threat: <GameIcon icon={threat} alt="threat" />,
        empty: ' ',
        player: <GameIcon icon={player} alt="player" />,
        treasure: <GameIcon icon={treasure} alt="treasure" />,
        wall: <GameIcon icon={wall} alt="wall" />,
      },
      health: 10,
      wealth: 0,
    };
    this.setThreats = this.setThreats.bind(this);
    this.setTreasure = this.setTreasure.bind(this);
    this.setWalls = this.setWalls.bind(this);
    this.setPlayerPosition = this.setPlayerPosition.bind(this);
    this.setBoard = this.setBoard.bind(this);
  }
  UNSAFE_componentWillMount() {
    let { boardHeight, boardWidth, playerPosition } = this.props;
    let board = [];

    for (let i = 0; i < boardHeight; i++) {
      let innerArray = []; //dont use ambiguous names

      for (let j = 0; j < boardWidth; j++) {
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
        this.setTreasure(
          this.props.treasurePosition,
          this.props.threatPosition
        );
        this.setWalls(
          this.props.treasurePosition,
          this.props.threatPosition,
          this.props.wallPosition
        );
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
    for (let i = 0; i < mapHeightWidth; i++) {
      if (
        board[threatPosition[i].x][threatPosition[i].y]['state'] !==
        this.state.entityStates.threat
      ) {
        board[threatPosition[i].x][threatPosition[i].y][
          'state'
        ] = this.state.entityStates.threat;
      }
    }
    this.setState({
      board,
    });
  }

  setTreasure(treasurePosition, threatPosition) {
    let { board, playerPosition } = this.state;
    for (let i = 0; i < mapHeightWidth; i++) {
      if (
        treasurePosition[i].x !== playerPosition.x &&
        treasurePosition[i].y !== playerPosition.y &&
        treasurePosition[i].x !== threatPosition.x &&
        treasurePosition[i].y !== threatPosition.y
      ) {
        if (
          board[treasurePosition[i].x][treasurePosition[i].y]['state'] !==
          this.state.entityStates.treasure
        ) {
          board[treasurePosition[i].x][treasurePosition[i].y][
            'state'
          ] = this.state.entityStates.treasure;
        }
      }
    }
    this.setState({
      board,
    });
  }

  setWalls(treasurePosition, threatPosition, wallPosition) {
    let { board, playerPosition } = this.state;
    for (let i = 0; i < mapHeightWidth; i++) {
      if (
        wallPosition[i].x !== playerPosition.x &&
        wallPosition[i].y !== playerPosition.y &&
        wallPosition[i].x !== threatPosition.x &&
        wallPosition[i].y !== threatPosition.y &&
        wallPosition[i].x !== treasurePosition.x &&
        wallPosition[i].y !== treasurePosition.y
      ) {
        if (
          board[wallPosition[i].x][wallPosition[i].y]['state'] !==
          this.state.entityStates.wall
        ) {
          board[wallPosition[i].x][wallPosition[i].y][
            'state'
          ] = this.state.entityStates.wall;
        }
      }
    }
    console.log(board);
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
        <table cellSpacing="3" border="1px solid black">
          <tbody>
            {board.map((item, index) => (
              <tr key={index}>
                {item.map((innerItem, innerIndex) => (
                  <td
                    className="cell-back"
                    key={innerIndex}
                    style={{
                      padding: 0,
                      border: '0px solid black',
                      margin: 0,
                      width: cellSize,
                      height: cellSize,
                      textAlign: 'center',
                      verticalAlign: 'middle',
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

export default GameBoard;
