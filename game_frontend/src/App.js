import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Draggable from 'react-draggable';

const pixelSize = 100;
const n = 4;

function SquareButton({value, onClick, isShip= false}){
  return   (
  <button 
    className="grid-item"
    onClick={onClick}
    style={{color: isShip ? 'red' : 'black'}}
  >
    {value}
  </button>);
}


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

function Ship2({color = 'red', position , handleDrag, isVertical = true}){
  return (
    <Draggable
    onDrag={handleDrag}
    axis='both'
    grid={[pixelSize+1,pixelSize+1]}
    bounds={{top: 0, left: 0, right: pixelSize*(n-1-(isVertical?0:(1+1/pixelSize)))+n-1, bottom: (pixelSize)*(n-1-(isVertical?(1+1/pixelSize):0))+n-1}}
    >
      <div  
        className = "square" 
        style={
          {
            border: '1px solid ' + color,
            height: (isVertical?2:1)*pixelSize-1,
            width: (isVertical?1:2)*pixelSize-1,
            position: 'absolute',
          }
        }
        >
          deltaPosition: {position[0]}, {position[1]}
      </div>
    </Draggable>
  );
}

function Ship({color = 'red', position , handleDrag}){

  return (
    <Draggable
    
    bounds={{top: 0, left: 0, right: pixelSize*(n-1)+n-1, bottom: pixelSize*(n-1)+n-1}}
    axis='both'
    grid={[pixelSize+1,pixelSize+1]}
    onDrag={handleDrag}

    >
    <div  
      className = "square" 
      style={
        {
          border: '1px solid ' + color,
          height: pixelSize-1,
          width: pixelSize-1,
          position: 'absolute'
        }
    }
      >
        deltaPosition: {position[0]}, {position[1]}
    </div>
    </Draggable>
  );
}

function Square(){
  return (
    <div  
      className = "grid-item" 
      style={
        {
          border: '1px solid black',
          height: pixelSize-1,
          width: pixelSize-1,
          
        }
    }
      >
    </div>
  );
}

function Grid  ({ n })  {
  // Generate an array from 0 to n*n - 1
  return (

    <>
  {Array.from({ length: n }, (_, rowIndex) => (
    <div key={rowIndex} className="board-row">
      {Array.from({ length: n }, (_, colIndex) => {
        const index = rowIndex * n + colIndex;
        return <Square key={`${rowIndex}-${colIndex}`} />;
      })}
    </div>
  ))}
</>
)
};

function ShipBoard() {

  const [ship2Vertical, setShip2Vertical] = useState(true);
  const [shipPosition, setShipPosition] = useState(Array( 0,  0));
  const [ship2Position, setShip2Position] = useState(Array( 0,  0));
  const [startGame, setStartGame] = useState(false);
  const [targets, setTargets] = useState(Array(n*n).fill(0) );

  const  handleDrag =  (i, e, ui) => {
    if (i==1){
      const newPosition =Array (shipPosition[0] + ui.deltaX, shipPosition[1] + ui.deltaY);
      setShipPosition(newPosition);
    } else if (i==2){
      const newPosition =Array (ship2Position[0] + ui.deltaX, ship2Position[1] + ui.deltaY);
      setShip2Position(newPosition);
    }
    
  }

  function onPlay(){
    const lastindex = Math.floor(ship2Position[1]/pixelSize)*n + Math.floor(ship2Position[0]/pixelSize);
    
    const index = [ Math.floor(shipPosition[1]/pixelSize)*n + Math.floor(shipPosition[0]/pixelSize), lastindex, lastindex + (ship2Vertical?n:1) ];
    const targets = Array(n*n).fill(0);
    for (let i = 0; i<3; i++){
      targets[index[i]] = 1;
    }
    setTargets(targets);
    setStartGame(true);
  }
  const preparation = (
    <div 
    className='board'
    >
      <Ship2 color='blue' position={ship2Position} handleDrag={(e,ui) => handleDrag(2,e,ui)} isVertical={ship2Vertical}  />
      <Ship color='red' handleDrag={(e,ui)=>handleDrag(1,e,ui)} position={shipPosition} /> 
      <Grid n={n} />
      <button onClick={onPlay} > Play </button>
      
    </ div>
  ) 
  if (startGame){
    return <GameBoard targets={targets} />
  } else {
    return preparation;
  }
}

// Example usage


function App(){
  return <ShipBoard squares={Array(1,1,1,1,1,1,1,1,1)} />;
}

export default App;

