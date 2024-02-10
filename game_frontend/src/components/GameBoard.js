
import React, { useState } from 'react';
import SquareButton  from './SquareButton';
import '../App.css';
import { n } from '../utils';

function GameBoard({targets}) {
    const [squares, setSquares] = useState(Array(n*n).fill(null));
  
    function handleClick(i){
      const nextSquares = squares.slice();
      nextSquares[i] = 'X';
      setSquares(nextSquares);
    }
  
    return (
      <>
      {Array.from({ length: n }, (_, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {Array.from({ length: n }, (_, colIndex) => {
            const index = rowIndex * n + colIndex;
            return <SquareButton key={`${rowIndex}-${colIndex}`} value={squares[index]} onClick={() => handleClick(index) } isShip={targets[index] === 1} />;
          })}
        </div>
      ))}
  
      {/* <div className='board-row'>
        <SquareButton value={squares[0]} onClick={() => handleClick(0) } isShip={targets[0] === 1}  />
        <SquareButton value={squares[1]} onClick={() => handleClick(1) } isShip={targets[1] === 1}  />
        <SquareButton value={squares[2]} onClick={() => handleClick(2) } isShip={targets[2] === 1}  />
      </div>
      <div className='board-row'>
        <SquareButton value={squares[3]} onClick={() => handleClick(3) } isShip={targets[3] === 1}  />
        <SquareButton value={squares[4]} onClick={() => handleClick(4) } isShip={targets[4] === 1}  />
        <SquareButton value={squares[5]} onClick={() => handleClick(5) } isShip={targets[5] === 1}  />
      </div>
      <div className='board-row'>
        <SquareButton value={squares[6]} onClick={() => handleClick(6) } isShip={targets[6] === 1}  />
        <SquareButton value={squares[7]} onClick={() => handleClick(7) } isShip={targets[7] === 1}  />
        <SquareButton value={squares[8]} onClick={() => handleClick(8) } isShip={targets[8] === 1}  />
      </div> */}
      </>
    ) 
    }

export default GameBoard;