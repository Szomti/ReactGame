import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScoreboardForm from './scoreboard/ScoreboardForm';
import ScoreboardItem from './scoreboard/ScoreboardItem';
import ScoreboardHeader from './scoreboard/ScoreboardHeader';
import PlayerTile from './tiles/PlayerTile';
import Player from './Player';
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
      map: new Maps().main,
      player: new Player(1, 1),
      won: false,
      listener: false,
      scoreboard: [{nick: "Totally Legit Player", moves: 184}, {nick: "Friend", moves: 425}, {nick: "Nowak", moves: 653}, {nick: "KowalskiV1", moves: 813}, {nick: "KowalskiV2", moves: 1041}],
      view: 'menu',
    }
    this.targets = this.countTiles('T');
    this.startEventListener = this.startEventListener.bind(this);
    this.playerAction = this.playerAction.bind(this);
    this.resetMap = this.resetMap.bind(this);
  }

  startEventListener(e) {
    e.preventDefault();
    if(this.state.listener) return;
    document.addEventListener('keypress', this.playerAction);
    this.setState({
      listener: true,
      view: 'board'
    });
  }
  
  render() {
    return (
      <div className='container-fluid row'>
        <div className='col-3 mt-4 ms-4'>
          <ScoreboardHeader/>
          {this.createScoreboard()}
        </div>
        <div className='info col-6'>
          {this.createMainView()}
        </div>
      </div>
    );
  }

  addToScoreboard(nick){
    let tempScoreboard = this.state.scoreboard;
    tempScoreboard.push({nick: nick, moves: this.state.player.moves})
    tempScoreboard.sort((a, b) => (a.moves > b.moves) ? 1 : (a.moves < b.moves) ? -1 : 0);
    this.setState({
      map: new Maps().main,
      player: new Player(1, 1),
      scoreboard: tempScoreboard,
      view: 'menu',
      won: false
    });
  }

  resetMap(e) {
    e.preventDefault();
    document.removeEventListener('keypress', this.playerAction);
    this.setState({
      map: new Maps().main,
      player: new Player(1, 1),
      won: true,
      view: 'menu',
      listener: false
    });
  }

  createMainView() {
    switch(this.state.view){
      case 'board':
        return (
          <>
            <div className='default-bg container-fluid p-3 mt-3 w-50'>
              <p>Moves: {this.state.player.moves}</p>
              <p>Progress: {this.countTiles('L')}/{this.targets}</p>
              <button className='btn btn-secondary' onClick={this.resetMap}>Reset</button>
            </div>
            <div id='board' className='board justify-content-center p-3'>{this.createMap()}</div>
          </>
        );
      case 'end':
        return (<ScoreboardForm moves={this.state.player.moves} onClick={(nick) => this.addToScoreboard(nick)}/>);
      case 'menu':
        return (<button className='btn btn-primary m-5' onClick={this.startEventListener}>Start</button>)
      default:
        return;
    }
  }

  createScoreboard() {
    let items = [];
    this.state.scoreboard.forEach((score, index) => {
      var rank;
      switch(index){
        case 0:
          rank = 'gold';
          break;
        case 1:
          rank = 'silver';
          break;
        case 2:
          rank = 'bronze';
          break;
        default:
          rank = 'scoreboard-default';
          break;
      }
      items.push(<ScoreboardItem rank={rank} key={index} nickname={score.nick} moves={score.moves}/>);
    });
    return items;
  }

  playerAction(event) {
    let tempMap = this.state.map;
    let player = this.state.player;
    
    let forUpdate = player.moves;
    event.preventDefault();
    switch(event.code){
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
      if(this.countTiles('L') === this.targets){
        document.removeEventListener('keypress', this.playerAction);
        this.setState({
          map: [[]],
          won: true,
          view: 'end',
          listener: false
        });
      }
    }
  }

  countTiles(search) {
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