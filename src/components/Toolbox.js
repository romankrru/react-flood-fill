import React, {Component} from 'react';

import Tool from './Tool';
import Palette from './Palette';

class Toolbox extends Component {
  render() {
    const tools = this.props.tools.map((tool, i) => {
      return (
        <Tool
          key={i}
          onToolClick={this.props.onToolClick}
          activeTool={this.props.activeTool}
          type={tool}
        />
      );
    });

    return (
      <div>
        {tools}
        <Palette
          activeColor={this.props.activeColor}
          onPaletteColorClick={this.props.onPaletteColorClick}
          paletteColors={this.props.paletteColors}
        />
      </div>
    );
  }
}

export default Toolbox;