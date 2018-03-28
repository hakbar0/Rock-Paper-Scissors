import React, { Component } from 'react';
import '../styles/layout.css';
import '../styles/App.css';



class App extends Component {

  state = {
    usedMoves: [],
    mostUsed: '',
    turn: 0,
    currentTurn: 0,
    currentWinner: '',
    player1Move: '',
    player1Score: 0,
    player2Move: '',
    player2Score: 0,
  }

  render() {
    return (

      <div id='wrap'>

        <div class='title'><h1>Rock Paper Scissors</h1></div>
        <div class='instructions'><h3>Instructions: To play rock-paper-scissors, two players must choose one of three items: rock, paper or scissors.</h3>
        </div>

        <div class='player1'>
          Player 1: {this.state.player1Score}
          <button className='btn btn-primary' onClick={() => this.player1Game('rock')}>Rock</button>
          <button className='btn btn-primary' onClick={() => this.player1Game('paper')}>Paper</button>
          <button className='btn btn-primary' onClick={() => this.player1Game('scissors')}>Scissors</button>
        </div>

        <div class='score-board'>
          <h4 className='turn'>Current Turn: {this.state.currentTurn}</h4>
          <h4 className='winner'>Last Winner: {this.state.currentWinner}</h4>
          <button type="button" class="btn btn-success" onClick={this.playGame}>Play</button>
        </div>

        <div class="player2">
          Player 2: {this.state.player2Score}
          <button className='btn btn-danger' onClick={() => this.player2Game('rock')}>Rock</button>
          <button className='btn btn-danger' onClick={() => this.player2Game('paper')} >Paper</button>
          <button className='btn btn-danger' onClick={() => this.player2Game('scissors')}>Scissors</button>
        </div>

        <div class='footer'>
          <h4 className='games-played'>Games Played: {this.state.turn}</h4>
          <h4>Current Winner: {this.checkWinner()}</h4>
          <h4>Most Used Moves: {this.state.mostUsed}</h4>
        </div>

      </div>
    );
  }

  playGame = () => {
    this.setState({ mostUsed: this.usedMoves() });
    if (this.state.player1Move && this.state.player2Move) {
      this.setState({currentTurn: this.state.currentTurn+1});
      this.setState({turn: this.state.turn+1});
      this.compareScore();
      this.storeMoves();
      this.setState({ player1Move: '', player2Move: '' })
    }
  }

  compareScore = () => {
    let currentP1Move = this.state.player1Move, currentP2Move = this.state.player2Move;
    let scoreArray = [0, 0];
    if (currentP1Move === 'rock' && currentP2Move === 'scissors') scoreArray[0] = 1;
    else if (currentP1Move === 'scissors' && currentP2Move === 'paper') scoreArray[0] = 1;
    else if (currentP1Move === 'paper' && currentP2Move === 'rock') scoreArray[0] = 1;
    else if (currentP1Move !== currentP2Move) scoreArray[1] = 1;
    else if (currentP1Move === currentP2Move) return;
    this.setState({ player1Score: this.state.player1Score + scoreArray[0], player2Score: this.state.player2Score + scoreArray[1], currentTurn: 0 });
    this.currentWinner(scoreArray);
  }

  currentWinner = (scoreArray) => {
    if (scoreArray[0] !== scoreArray[1]) {
      if (scoreArray[0] > scoreArray[1]) return this.setState({ currentWinner: 'Player 1' })
      else return this.setState({ currentWinner: 'Player 2' })
    }
  }

  player1Game = (move) => (this.setState({ player1Move: move }));

  player2Game = (move) => (this.setState({ player2Move: move }));

  checkWinner = () => {
    if (this.state.player1Score === this.state.player2Score) return 'Draw';
    else if (this.state.player1Score > this.state.player2Score) return 'Player 1';
    return 'Player 2';
  }

  storeMoves = () => {this.state.usedMoves.push(this.state.player1Move, this.state.player2Move);}

  usedMoves = () => {
    let usedArray = this.state.usedMoves;
    return usedArray.sort((a, b) =>
      usedArray.filter(v => v === a).length
      - usedArray.filter(v => v === b).length
    ).pop();
  }
}

export default App;
