import React from 'react';
import HealthBar from '../HealthBar/HealthBar';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      entityStates: {
        threat: 'X',
        empty: ' ',
        player: 'O',
        treasure: 'T',
      },
      health: 10,
    };
    this.setObstacles = this.setObstacles.bind(this);
    this.setPlayerPosition = this.setPlayerPosition.bind(this);
    this.setBoard = this.setBoard.bind(this);
  }
  componentWillMount() {
    let { boardHeight, boardWidth, playerPosition } = this.props;
    let board = [];

    for (let i = 0; i < boardHeight; i++) {
      let innerArray = [];

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
        this.setObstacles(this.props.threatPosition);
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

  componentWillReceiveProps(nextProps) {
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
    } else {
      board[newPlayerPos.x][newPlayerPos.y][
        'state'
      ] = this.state.entityStates.player;
      board[prevPlayerPos.x][prevPlayerPos.y][
        'state'
      ] = this.state.entityStates.empty;
    }
  }
  setObstacles(threatPosition) {
    let { board, playerPosition } = this.state;
    let totalObstaclesLeft = 0;
    for (let i = 0; i < threatPosition.length; i++) {
      if (
        threatPosition[i].x !== playerPosition.x &&
        threatPosition[i].y !== playerPosition.y
      ) {
        if (
          board[threatPosition[i].x][threatPosition[i].y]['state'] !==
          this.state.entityStates.threat
        ) {
          ++totalObstaclesLeft;
          board[threatPosition[i].x][threatPosition[i].y][
            'state'
          ] = this.state.entityStates.threat;
        }
      }
    }
    this.setState({
      board,
      totalObstaclesLeft,
    });
  }
  render() {
    let { board } = this.state;
    return (
      <>
        <HealthBar health={this.state.health} />
        <table cellSpacing="0" border="1px solid black">
          <tbody>
            {' '}
            {board.map((item, index) => (
              <tr key={index}>
                {' '}
                {item.map((innerItem, innerIndex) => (
                  <td
                    key={innerIndex}
                    style={{
                      border: '1px solid black',
                      margin: 0,
                      width: 50,
                      height: 50,
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                  >
                    <p>{innerItem.state}</p>
                  </td>
                ))}{' '}
              </tr>
            ))}{' '}
          </tbody>
        </table>
      </>
    );
  }
}

export default GameBoard;
