import React from 'react';
import FontAwesome from 'react-fontawesome';

const Status = (props) => {
  console.log('the winner is ' + props.winner);
  console.log('the player is ' +props.player);

  if(props.winner === 'x') { 
    return (
      <div className="status">Game Over! The winner is: <FontAwesome name='anchor' className={props.spin} style={{color: 'black'}}/></div>
    )
  } 

  else if (props.winner === 'y') {
   return (
      <div className="status">Game Over! The winner is: <FontAwesome name='heart' className={props.spin} style={{color: 'black' }}/></div>
    )
  } 

  else if (props.over === true) {
    return (
      <div className="status">Game Over! No Winner. <FontAwesome name='adjust' className={props.spin} style={{color: 'black' }}/></div>
    )
  }

  else if (!props.winner && props.player === 'x') {
    return (
      <div className="status">The next player is: <FontAwesome name='anchor' className={props.spin} style={{color: 'black'}}/></div>
    )
  }

  else if (!props.winner && props.player === 'y') {
    return (
      <div className="status">The next player is: <FontAwesome name='heart' className={props.spin} style={{color: 'black'}}/></div>
    )
  } 

  else {
    return (<div className="status">The next player is: <FontAwesome name='anchor' className={props.spin} style={{color: 'black'}}/></div>)
  }
}

export default Status;