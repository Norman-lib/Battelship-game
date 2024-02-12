import '../App.css';
import { pixelSize } from '../utils';
import { dragTypes } from './ships/ship1';
import { useDrop } from 'react-dnd';

const color = 'lightblue';
const fill = 'darkblue';
const stroke = 'black';



function Square({ children }) {
  return (
    <div
      style={{
        backgroundColor: fill,
        color: color,
        border: `1px solid ${stroke}`,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default function BoardSquare({ i, children, moveShip }) {
  const [{isOver}, drop] = useDrop(
    () => ({
      accept: dragTypes.SHIP,
      drop: (item, monitor) =>   moveShip(i, item.id),
      collect : (monitor) => ({
        isOver: !!monitor.isOver(),
      })
    }),
    [i]
  )
  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square >{children}</Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div>
  )
}