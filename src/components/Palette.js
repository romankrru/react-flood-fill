import React from 'react';

import PaletteColor from './PaletteColor';

const Palette = (props) => {
  const availableColors = props.paletteColors.map((paletteColor, i) => (
    <PaletteColor
      onPaletteColorClick={props.onPaletteColorClick.bind(null, i)}
      key={i}
      color={paletteColor}
    />
  ));

  return (
    <div>
      <div className="availableColors">
        {availableColors}
      </div>
      <div>
        Current color:
        <div className="PaletteColor" style={{backgroundColor: props.activeColor }}/>
      </div>
    </div>
  )
};

export default Palette;