import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function component
function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={{backgroundColor:props.bgColor}}>
    {props.value}
    </button>
    
    );

}

class Board extends React.Component {
  renderSquare(i) {
    return <Square 
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      bgColor={this.props.bgColor[i]}
    />
    ;
  }

  // Rewrite Board to use two loops to make the squares instead of hardcoding them
  createBoard = function createBoard() {
      let board = []

      for (let i = 0; i < 3; i++) {
        let boardRow = []
        
        for (let j = 3 * i; j < 3 * i + 3; j++) {
          boardRow.push(this.renderSquare(j))
        }

        board.push(<div key={i}>{boardRow}</div>)
      }
      return board
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        bgColor: Array(9).fill("transparent"),
        row: 0,
        column: 0,
      }],
      stepNumber: 0,
      xIsNext: true,
      descending: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();  //slice(): create a copy
    const bgColor = current.bgColor;
    // Display the location for each move in the format (col, row)
    const row = Math.floor(i / 3 + 1);
    const col = Math.floor(i % 3 + 1);

    if (calculateWinner(squares, bgColor) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        bgColor: bgColor,
        row: row,
        col: col,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      descending: false,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  handleSort() {
      this.setState(state => ({ 
        descending: !state.descending
      }));
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares, current.bgColor);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      const location = move !== 0 ? " (" + [history[move].row , history[move].col].toString() + ")" : null;

      return (
        <li key={move}>
          {/* Bold the currently selected item in the move list */}
          {move === this.state.stepNumber
            ? <button class="moveBtn" onClick={() => 
                {if(winner){} else{this.jumpTo(move)}}}>
                <b>{desc}{location}</b>
              </button> 
            : <button class="moveBtn" onClick={() => 
                {if(winner){} else{this.jumpTo(move)}}}>
              {desc}{location}
              </button> 
          }
          
        </li>
      );
    });

    let status;
    if (winner && winner !== "Draw") {
      status = 'Winner: ' + winner;
    } 
    else if (winner === "Draw"){
      status = "Draw"
    }
    else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    }

    return (
      
      <div className="game">
        <div className="game-name">
          <h1>Tic-Tac-Toe</h1>
        </div>
        <div className="game-content">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              bgColor={current.bgColor}
                />
          </div>
          <div className="game-info">
            {/* Add a toggle button that lets you sort the moves in either ascending or descending order. */}
            <div>{status}</div>
            <button className="sortBtn" onClick={() => this.handleSort()}>SORT MOVES</button>
            <ol>{this.state.descending ? moves.reverse() : moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares, bgColor) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let filled = 0;

  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      bgColor[a] = bgColor[b] = bgColor[c] = "#ffd31d";
      return squares[a];
    }
    else if (squares[a] && squares[b] && squares[c]) {
      filled += 1;
    }
    else{}
  }

  // When no one wins, display a message about the result being a draw.
  if (filled === 8){
    return "Draw";
  }
  else{
    return null;
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

