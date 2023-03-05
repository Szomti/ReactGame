import React from 'react';
import './App.css';
import Player from './tiles/Player.js';
import RockTile from './tiles/RockTile.js';
import SpaceTile from  './tiles/SpaceTile.js';
import WallTile from './tiles/WallTile.js';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    return (
      <div class='board'>
        {CreateMap()}
      </div>
    );
  }
};

// document.addEventListener('keyup', (event) => {
//   var name = event.key;
//   var code = event.code;
// }, false);

function CreateMap() {
  return map.map(row => {
    return row.map(tile => {
      switch(tile){
        case ' ':
          return <WallTile/>;
        case 'S':
          return <SpaceTile/>;
        case 'R':
          return <RockTile/>;
        case 'P':
          return <Player/>;
        default:
          return <WallTile/>;
        }
      });
    });
  }
  
  const map = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
    [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
    [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
    [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' ', ' ', ' ', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'R', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'P', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

export default Board;