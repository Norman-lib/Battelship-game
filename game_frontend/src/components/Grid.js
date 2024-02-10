import "../App.css";
import Square from "./Square";

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

export default Grid;