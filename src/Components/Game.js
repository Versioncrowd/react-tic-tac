import React from 'react';
import Board from './Board';

class Game extends React.Component {
  render() {
    return (<div className="game">
      <Board />
      <div className="game-info">
        <div>{ /* status */ }</div> 
          <ol>{ /* TODO */ }</ol> 
        </div> 
      </div>
    );
  }
}

export default Game;