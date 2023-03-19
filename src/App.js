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
      player: new Player(1, 1),
    }
    document.addEventListener('keypress', (event) => this.playerAction(event.code));
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
        player.moveUp(tempMap);
        break;
      case 'KeyS':
        player.moveDown(tempMap);
        break;
      case 'KeyA':
        player.moveLeft(tempMap);
        break;
      case 'KeyD':
        player.moveRight(tempMap);
        break;
      default:
        return;
    }
    this.setState({
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