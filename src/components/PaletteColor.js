import React from 'react';

const PaletteColor = (props) => {
  return (
    <div
      onClick={props.onPaletteColorClick}
      style={{backgroundColor: props.color}}
      className="PaletteColor"
    />
  );
};

export default PaletteColor;