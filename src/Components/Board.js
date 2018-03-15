import React from 'react';
import FontAwesome from 'react-fontawesome';
import Square from './Square';
import Status from './Status';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      player: 'x',
      over: false
  }
}

clickHandler = (index) => {
  let array = this.state.squares.slice();
  const winner = calculateWinner(array);
  let over = this.state.over;
  
  // If clicked or winner, dont do anything.
  if (array[index]) {
    return
  } 

  if(winner || over) {
    this.setState({
      squares: Array(9).fill(null),
      player: 'x',
      over: false
    })

    return
  }

  if(array.filter(item => item === null).length === 1){
    this.setState({
      over: true
    })
  };

  // Otherwise add this symbol.
  if (this.state.player === 'x') {
      array[index] = 'x';
      this.setState({
        squares: array,
        player: 'y'
      })
    } 

  else if (this.state.player === 'y') {
      array[index] = 'y';
      this.setState({
          squares: array,
          player: 'x'
      })
    }
}


renderSquare(index) {
  const array = this.state.squares.slice();
  const winner = calculateWinner(array);
  // If winner, spin!
  if (winner && winner === this.state.squares[index]) {
    return <Square index={index} click = {() => {this.clickHandler(index)}} value={this.state.squares[index]} spin='fa-spin'/>;
  } 
// Else, normal!
  else {
    return <Square index={index} click ={() => {this.clickHandler(index)}} value ={this.state.squares[index]}/>
  }
}

render() {
  let array = this.state.squares.slice();
  const winner = calculateWinner(array);
  return ( 
    <div className="centered">
      <Status player={this.state.player} winner={winner} over={this.state.over} /> 
      <div className ="board">{this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)} {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)} {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}</div>
    </div>
  );
  }
}

function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;