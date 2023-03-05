import React from 'react';
import './App.css';
import Player from './tiles/Player.js';
import RockTile from './tiles/RockTile.js';
import SpaceTile from  './tiles/SpaceTile.js';
import WallTile from './tiles/WallTile.js';
import Maps from './maps/Maps.js';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: Maps.mapA
    }
  }
  
  render() {
    document.addEventListener('keyup', (event) => {
      if(event.code === 'KeyW'){
        let temp = this.state.map;
        temp[0][0] = 'S';
        this.setState({
          map: temp
        });
      }
    }, false);
    
    return (
      <div class='board'>
        {this.createMap()}
      </div>
    );
  }

  createMap() {
    return this.state.map.map(row => {
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
};

export default Board;