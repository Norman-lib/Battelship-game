import "./ships.css";
import {n , pixelSize} from '../../utils';


function Ship2({color = 'red', position , handleDrag, isVertical = true}){
    return (
      <
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
      </>
    );
  }

export default Ship2;