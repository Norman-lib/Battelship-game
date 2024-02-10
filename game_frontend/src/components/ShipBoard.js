// import { useState } from 'react';

// // import Functions 

// import GameBoard  from './GameBoard';
// import Ship from './ships/ship1';
// import Ship2 from './ships/ship2';
// import Grid from './Grid';

// import { n, pixelSize } from '../utils';

// function ShipBoard() {

//     const [ship2Vertical, setShip2Vertical] = useState(true);
//     const [shipStartPosition, setShipStartPosition] = useState(Array( 0,  0));
//     const [shipPosition, setShipPosition] = useState(Array( 0,  0));
//     const [ship2Position, setShip2Position] = useState(Array( 0,  0));
//     const [startGame, setStartGame] = useState(false);
//     const [targets, setTargets] = useState(Array(n*n).fill(0) );

//     // const onStartDrag = (e, ui) => {
//     //     shipStartPosition
//     // }
//     const  handleDrag =  (i, e, ui) => {
//       if (i==1){
//         const newPosition =Array (shipPosition[0] + ui.deltaX, shipPosition[1] + ui.deltaY);
//         setShipPosition(newPosition);
//       } else if (i==2){
//         const newPosition =Array (ship2Position[0] + ui.deltaX, ship2Position[1] + ui.deltaY);
//         setShip2Position(newPosition);
//       }

//     }

//     // function onStopDrag(e, ui){

//     // }

//     function onPlay(){
//       const lastindex = Math.floor(ship2Position[1]/pixelSize)*n + Math.floor(ship2Position[0]/pixelSize);

//       const index = [ Math.floor(shipPosition[1]/pixelSize)*n + Math.floor(shipPosition[0]/pixelSize), lastindex, lastindex + (ship2Vertical?n:1) ];
//       const targets = Array(n*n).fill(0);
//       for (let i = 0; i<3; i++){
//         targets[index[i]] = 1;
//       }
//       setTargets(targets);
//       setStartGame(true);
//     }
//     const preparation = (
//       <div 
//       className='board'
//       >
//         <Ship2 color='blue' position={ship2Position} handleDrag={(e,ui) => handleDrag(2,e,ui)} isVertical={ship2Vertical}  />
//         <Ship color='red' handleDrag={(e,ui)=>handleDrag(1,e,ui)} position={shipPosition} /> 
//         <Grid n={n} />
//         <button onClick={onPlay} > Play </button>

//       </ div>
//     ) 
//     if (startGame){
//       return <GameBoard targets={targets} />
//     } else {
//       return preparation;
//     }
//   }

// export default ShipBoard;


import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { setShipPositions } from '../features/shipPositions/shipPositionsSlice';
import { useDispatch, useSelector } from 'react-redux'
import Ship1 from './ships/ship1'
import BoardSquare from './BoardSquare'



function renderShip(shipPosition, i) {
  const piece = shipPosition === i ? <Ship1 /> : null
  return piece

}


function renderSquare(i, position, moveShip) {
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={() => {
      console.log("onClick", i);
      moveShip(i)
    }}>
      <BoardSquare i={i} moveShip={(i) => moveShip(i)} >
        {renderShip(position, i)}
      </BoardSquare>
    </div>
  )
}

export default function Board() {
  const shipPosition = useSelector((state) => state.shipPositions.value)
  const dispatch = useDispatch()
  function moveShip(i) {
    // const randPos = () => Math.floor(Math.random() * 8)
    // const i = randPos() * 8 + randPos()
    dispatch(setShipPositions(i))
  }
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, shipPosition, moveShip));
  }
  return (
    <DndProvider backend={HTML5Backend}>

      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  )
}

// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement  } from '../features/counter/counterSlice'
// import { setShipPositions } from './features/shipPositions/shipPositionsSlice';


// export default function Counter() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }
