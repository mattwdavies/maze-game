import React from 'react';
import Map from '../Map/Map'
import _ from 'lodash'
import KeyHandler from 'react-key-handler';

class PlayMaze extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showGameBoard: false,
            boardHeight: 10,
            boardWidth: 10,
            randomPositions: [],
            playerPosition: {
                x: 0,
                y: 0
            },
            prevPlayerPos: {
                x: 0,
                y: 0
            },
            totalMoves: 0,
        }
        this.generateThreats = this.generateThreats.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleKeyRight = this.handleKeyRight.bind(this)
        this.handleKeyLeft = this.handleKeyLeft.bind(this)
        this.countTotalMoves = this.countTotalMoves.bind(this)
        this.setPlayerPosition = this.setPlayerPosition.bind(this)
        this.setPlayerZero = this.setPlayerZero.bind(this)
        this.startGame = this.startGame.bind(this)
    }
    componentWillMount() {
        this.startGame()
    }

    startGame() {
        this.setPlayerPosition()
        this.generateThreats()
    }
    setPlayerPosition() {

        let playerPosition = {
            x: 0,
            y: 0
        }
        this.setState({
            playerPosition,
            showGameBoard: true
        })
    }

    setPlayerZero() {

        let playerPosition = {
            x: 0,
            y: 0
        }
        this.setState({
            playerPosition,
            showGameBoard: true
        })
    }

    generateThreats() {
        let { randomPositions } = this.state
        let randomValues = []
        let { boardHeight, boardWidth } = this.state
        let smallest = 0
        if (Number(boardHeight) < Number(boardWidth)) {
            smallest = boardHeight
        } else {
            smallest = boardWidth
        }
        for (let i = 0; i < Math.ceil(smallest / 2); i++) {
            randomValues.push(_.random(0, smallest - 1))
        }
        for (let i = 0; i < randomValues.length; i++) {
            for (let j = 0; j < randomValues.length; j++) {
                let newRandomPosition = {
                    x: randomValues[i],
                    y: randomValues[j]
                }
                if (!randomPositions.includes(newRandomPosition)) {
                    randomPositions.push(newRandomPosition)
                }
            }
        }
        this.setState({
            randomPositions
        })
    }
    countTotalMoves() {
        this.setState({
            totalMoves: ++this.state.totalMoves
        })
    }
    handleKeyUp(e) {
        e.preventDefault()
        let {
            playerPosition,
        } = this.state

        let prevPos = {
            x: playerPosition.x,
            y: playerPosition.y
        }
        let newX = playerPosition.x
        if (Number(newX) - 1 >= 0) {
            --newX
            playerPosition["x"] = newX
            this.setState({
                playerPosition,
                prevPlayerPos: prevPos
            })
            this.countTotalMoves()
        }
    }
    handleKeyDown(e) {
        e.preventDefault()
        let {
            playerPosition,
            boardHeight,
        } = this.state

        let prevPos = {
            x: playerPosition.x,
            y: playerPosition.y
        }

        let newX = playerPosition.x
        if (Number(newX) + 1 < boardHeight) {
            ++newX
            playerPosition["x"] = newX
            this.setState({
                playerPosition,
                prevPlayerPos: prevPos
            })
            this.countTotalMoves()
        }
    }
    handleKeyRight(e) {
        e.preventDefault()
        let {
            playerPosition,
            boardWidth
        } = this.state

        let prevPos = {
            x: playerPosition.x,
            y: playerPosition.y
        }

        let newY = playerPosition.y
        if (Number(newY) + 1 < boardWidth) {
            ++newY
            playerPosition["y"] = newY
            this.setState({
                playerPosition,
                prevPlayerPos: prevPos
            })
            this.countTotalMoves()
        }
    }
    handleKeyLeft(e) {
        e.preventDefault()
        let {
            playerPosition,
        } = this.state

        let prevPos = {
            x: playerPosition.x,
            y: playerPosition.y
        }
        let newY = playerPosition.y
        if (Number(newY) - 1 >= 0) {
            --newY
            playerPosition["y"] = newY
            this.setState({
                playerPosition,
                prevPlayerPos: prevPos
            })
            this.countTotalMoves()
        }
    }

    render() {
        return ( <div>
            <KeyHandler keyValue = "ArrowUp"
            onKeyHandle = {
                this.handleKeyUp
            }
            /> <KeyHandler keyValue = "ArrowDown"
            onKeyHandle = {
                this.handleKeyDown
            }
            /> <KeyHandler keyValue = "ArrowRight"
            onKeyHandle = {
                this.handleKeyRight
            }
            /> <KeyHandler keyValue = "ArrowLeft"
            onKeyHandle = {
                this.handleKeyLeft
            }
            />

            {
                this.state.showGameBoard &&
                    ( < Map 
                        randomPositions = { this.state.randomPositions }
                        boardWidth = { this.state.boardWidth }
                        boardHeight = { this.state.boardHeight }
                        playerPosition = { this.state.playerPosition }
                        prevPlayerPos = { this.state.prevPlayerPos }
                        totalMoves = { this.state.totalMoves }
                        />
                    )
            } 
        </div>
        )}
    }

    export default PlayMaze;