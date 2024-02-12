import "./ships.css";
import { useDrag } from 'react-dnd';
import { React } from 'react';
import { n, pixelSize } from '../../utils';

const dragTypes = {
  SHIP: 'ship'
}

function Ship1({color = 'red', id}){

  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dragTypes.SHIP,
    item : {id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        fontSize: 100,
        fontWeight: 'bold',
        cursor: 'move',
        color: isDragging ? color : 'black' ,
      }}
    >
      ♘
    </div>
  )
}
export { dragTypes };
export default Ship1;
// function Ship({color = 'red', position , handleDrag}){
//     function onStart(e,ui){
//       console.log("start", e, ui);
//     }
//     return (
//       <Draggable
//       onStart={onStart}
//       axis='both'
//       onDrag={handleDrag}
//       >
//       <div  
//         className = "square" 
//         style={
//           {
//             border: '1px solid ' + color,
//             height: pixelSize-1,
//             width: pixelSize-1,
//             position: "absolute",
//             // top: Math.floor(position[1]/pixelSize) * pixelSize ,
//             // left: Math.floor(position[0]/pixelSize)  /pixelSize,
//           }
//       }
//         >
//           {/* deltaPosition: {position[0]}, {position[1]} */}
//           deltaPosition : {Math.floor(position[0]/pixelSize) * pixelSize}, {Math.floor(position[1]/pixelSize) * pixelSize}
//       </div>
//       </Draggable>
//     );
//   }
  
// export default Ship;