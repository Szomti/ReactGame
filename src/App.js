import React from 'react';
import './App.css';
import PlayerTile from './tiles/PlayerTile';
import Player from './Player'
import RockTile from './tiles/RockTile';
import SpaceTile from  './tiles/SpaceTile';
import WallTile from './tiles/WallTile';
import Maps from './maps/Maps';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: Maps.mapA,
      initialized: 0,
      player: new Player(1, 1)
    }
    document.addEventListener('keyup', (event) => {
      this.playerAction(event.code);
    }, false);
  }
  
  render() {
    return (
      <div class='board'>
        {this.createMap()}
      </div>
    );
  }

  playerAction(keyCode) {
    let tempMap = this.state.map;
    let player = this.state.player;
    switch(keyCode){
      case 'KeyW':
        tempMap = player.moveUp(tempMap);
        break;
      case 'KeyS':
        tempMap = player.moveDown(tempMap);
        break;
      case 'KeyA':
        tempMap = player.moveLeft(tempMap);
        break;
      case 'KeyD':
        tempMap = player.moveRight(tempMap);
        break;
      default:
        break;
    }
    this.setState({
      map: tempMap,
      player: player
    });
  }

  createMap() {
    return this.state.map.map(row => {
      return row.map((tile, index) => {
        switch(tile){
          case ' ':
            return <WallTile key={index}/>;
          case 'S':
            return <SpaceTile key={index}/>;
          case 'R':
            return <RockTile key={index}/>;
          case 'P':
            return <PlayerTile key={index}/>;
          default:
            return <WallTile key={index}/>;
          }
        });
      });
    }
};

export default Board;