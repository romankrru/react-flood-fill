import React from 'react';

import Cell from './Cell';

const Board = (props) => {
  const cells = props.data.map((line, i) => (
    <tr key={i}>
      {
        line.map((cell, j) => (
          <Cell
            key={j}
            color={cell.color}
            rowIndex={i}
            cellIndex={j}
            activeColor={props.activeColor}
            onClick={props.onCellClick}
          />
        ))
      }
    </tr>
  ));

  return (
    <table class="board">
      <tbody>
        {cells}
      </tbody>
    </table>
  );
}

export default Board;