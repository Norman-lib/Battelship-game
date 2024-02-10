import React from 'react';
import '../App.css';

function SquareButton({value, onClick, isShip= false}){
    return   (
    <button 
      className="grid-item"
      onClick={onClick}
      style={{color: isShip ? 'red' : 'black'}}
    >
      {value}
    </button>);
  };

export default SquareButton;