import React from 'react';
import './App.css';
import PlayerTile from './tiles/PlayerTile';
import Player from './Player'
import RockTile from './tiles/RockTile';
import TargetTile from './tiles/TargetTile';
import LockedRockTile from './tiles/LockedRockTile';
import SpaceTile from  './tiles/SpaceTile';
import WallTile from './tiles/WallTile';
import FakeWallTile from './tiles/FakeWallTile';
import Maps from './maps/Maps';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: Maps.mapA,
      player: new Player(1, 1),
      won: false,
    }
    this.targets = this.targetsToWin('T');
    document.addEventListener('keypress', (event) => {
      event.preventDefault();
      this.playerAction(event.code);
    });
  }
  
  render() {
    return (
      <>
        <div class='info'>
          <p>Moves: {this.state.player.moves}</p>
          <p>Progress: {this.targetsToWin('L')}/{this.targets}</p>
        </div>
        <div class='board'>
          {this.createMap()}
        </div>
      </>
    );
  }

  playerAction(keyCode) {
    let tempMap = this.state.map;
    let player = this.state.player;
    
    let forUpdate = player.moves;
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
    if(forUpdate<player.moves){
      this.setState({
        player: player
      });
      if(this.targetsToWin('L') == this.targets){
        alert('You Won!');
      }
    }
  }

  targetsToWin(search) {
    let count = 0;
    this.state.map.forEach(row => {
      count += row.filter(tile => tile === search).length;
    });
    return count;
  }

  createMap() {
    return this.state.map.map(row => {
      return row.map((tile, index) => {
        switch(tile){
          case ' ':
            return <WallTile key={index}/>;
          case 'F':
            return <FakeWallTile key={index}/>;
          case 'S':
            return <SpaceTile key={index}/>;
          case 'R':
            return <RockTile key={index}/>;
          case 'L':
            return <LockedRockTile key={index}/>;
          case 'T':
            return <TargetTile key={index}/>;
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