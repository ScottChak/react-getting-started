import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function canPick(square) {
  return square === null;
}

function calculateWinner(squares, players) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return players[squares[a]];
    }
  }

  return null;
}

// Square can be a function component as it is stateless
function Square(props) {
  // Displaying value from props field "value"
  // Listening to click and forwarding to props field "onClick"
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      players: [new Player("X"), new Player("O")],
      currentPlayer: 0,
      winner: null
    };
  }

  // Updating state field "squares" with correct index
  handleClick(idx) {
    if (this.state.winner === null && canPick(this.state.squares[idx])) {
      // const for value that is readonly
      // Creating duplicate of squares
      const squares = this.state.squares.slice();

      // Updating value
      squares[idx] = this.state.players[this.state.currentPlayer].symbol;

      const nextPlayer = (this.state.currentPlayer + 1) % 2;

      const winner = calculateWinner(
        squares,
        this.state.players.reduce((acc, cur, i) => {
          acc[cur.symbol] = i;
          return acc;
        }, {})
      );

      console.log(winner);

      // Updating state without mutation
      this.setState(Object.assign({}, this.state, { squares: squares, currentPlayer: nextPlayer, winner: winner }));
    }
  }

  renderSquare(idx) {
    // Displaying value from state field "squares" with correct index
    // Passing onClick listener to props of Square
    return <Square value={this.state.squares[idx]} onClick={() => this.handleClick(idx)} />;
  }

  render() {
    const status =
      this.state.winner !== null
        ? `Winner: ${this.state.players[this.state.winner].symbol}`
        : `Next player: ${this.state.players[this.state.currentPlayer].symbol}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
