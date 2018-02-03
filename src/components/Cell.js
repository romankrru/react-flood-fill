import React from 'react';

const Cell = (props) => {
  return (
    <td
      onClick={() => props.onClick(
        props.rowIndex,
        props.cellIndex,
        props.activeColor,
        props.color
      )}
      className="cell"
      style={{ backgroundColor: props.color }}>
    </td>
  );
};

export default Cell;