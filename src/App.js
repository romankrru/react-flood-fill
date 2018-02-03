import React, { Component } from 'react';

import './App.css';
import Board from './components/Board';
import Toolbox from './components/Toolbox';

class App extends Component {
  constructor() {
    super();

    const size = 7;

    const cell = {
      color: 'blue',
    };

    const board = new Array(size).fill(new Array(size).fill(cell));

    this.state = {
      tools: ['PENCIL', 'FILL'],
      activeTool: 'PENCIL',
      paletteColors: ['blue', 'red', 'green', 'black', 'yellow'],
      activeColor: 'blue',
      board,
    };
  }

  onCellClick = (rowIndex, cellIndex, newColor, currentCellColor) => {
    switch (this.state.activeTool) {
      case 'PENCIL':
        this.setState({
          board: this.repaintCell(
            rowIndex,
            cellIndex,
            newColor,
            this.state.board
          ),
        });
        break;
      case 'FILL':
        this.setState({
          board: this.floodFill(
            rowIndex,
            cellIndex,
            newColor,
            currentCellColor,
            this.state.board
          ),
        });
        break;
      default:
        break;
    }
  }

  repaintCell = (rowIndex, cellIndex, newColor, oldBoard) => {
    const newBoard = [
      ...oldBoard.slice(0, rowIndex),
      [
        ...oldBoard[rowIndex].slice(0, cellIndex),
        { ...oldBoard[rowIndex][cellIndex], color: newColor },
        ...oldBoard[rowIndex].slice(cellIndex + 1)
      ],
      ...oldBoard.slice(rowIndex + 1),
    ];

    return newBoard;
  }

  floodFill = (rowIndex, cellIndex, newColor, currentCellColor, oldBoard) => {
    let newBoard = [...oldBoard];

    function f(rowIndex, cellIndex, newColor, currentCellColor) {
      if (
        !newBoard[rowIndex] ||
        !newBoard[rowIndex][cellIndex] ||
        newBoard[rowIndex][cellIndex].color === newColor ||
        newBoard[rowIndex][cellIndex].color !== currentCellColor
      ) {
        return;
      }

      newBoard = this.repaintCell(rowIndex, cellIndex, newColor, newBoard);

      f.call(this, rowIndex + 1, cellIndex, newColor, currentCellColor, newBoard);
      f.call(this, rowIndex - 1, cellIndex, newColor, currentCellColor, newBoard);
      f.call(this, rowIndex, cellIndex + 1, newColor, currentCellColor, newBoard);
      f.call(this, rowIndex, cellIndex - 1, newColor, currentCellColor, newBoard);
    }
    
    f.call(this, rowIndex, cellIndex, newColor, currentCellColor);

    return newBoard;
  }

  onPaletteColorClick = (index) => {
    const newActiveColor = this.state.paletteColors[index];

    this.setState({
      activeColor: newActiveColor,
    });
  }

  onToolClick = (newTool) => {
    this.setState({
      activeTool: newTool,
    });
  }

  render() {
    return (
      <div>
        <Board
          data={this.state.board}
          onCellClick={this.onCellClick}
          activeColor={this.state.activeColor}
        />
        <Toolbox
          tools={this.state.tools}
          activeTool={this.state.activeTool}
          paletteColors={this.state.paletteColors}
          activeColor={this.state.activeColor}
          onPaletteColorClick={this.onPaletteColorClick}
          onToolClick={this.onToolClick}
        />
      </div>
    );
  }
}


export default App;
