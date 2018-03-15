import React from 'react';
import FontAwesome from 'react-fontawesome';


const Square = (props) => {
    if (props.value === 'x') {
    return ( 
      <button className="square" key={props.index} onClick={props.click}>
        <FontAwesome name='anchor' className={props.spin} style={{color: 'black'}}/> 
      </button>
    )
  } else if (props.value=== 'y') {
    return (<button className="square" key={props.index} onClick={props.click}>
        <FontAwesome name='heart' className={props.spin} style={{color: 'black' }}/> 
      </button>
    )

  } else {
    return ( <button className = "square" key={props.index} onClick={props.click}>
      </button>
    )
  }
}

export default Square;