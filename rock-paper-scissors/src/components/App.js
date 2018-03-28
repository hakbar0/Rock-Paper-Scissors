import React, { Component } from 'react';
import '../styles/layout.css';
import '../styles/App.css';



class App extends Component {

  state = {
    usedMoves: [],
    turn: 0,
    currentTurn: 0,
    currentWinner: '',
    player1Move: '',
    player1Score: 0,
    player2Move: '',
    player2Score: 0,
  }


  playGame = () => {

    if (this.state.player1Move && this.state.player2Move) {
      this.state.currentTurn++
      this.state.turn++;
      this.compareScore();
      this.setState({player1Move: '',player2Move: '' })

    }
  }

  compareScore = () => {
    let currentP1Move = this.state.player1Move, currentP2Move = this.state.player2Move;
    let scoreArray = [0, 0];
    if (currentP1Move === 'rock' && currentP2Move === 'scissors') scoreArray[0] = 1;
    else if (currentP1Move === 'scissors' && currentP2Move === 'paper') scoreArray[0] = 1;
    else if (currentP1Move === 'paper' && currentP2Move === 'rock') scoreArray[0] = 1;
    else if (currentP1Move !== currentP2Move) scoreArray[1] = 1;
    else if(currentP1Move === currentP2Move) return;
    this.setState({ player1Score: this.state.player1Score += scoreArray[0], player2Score: this.state.player2Score += scoreArray[1], currentTurn: 0 });
    this.currentWinner(scoreArray);
  }

  currentWinner = (scoreArray) => {
    if(scoreArray[0]!== scoreArray[1]){
      if(scoreArray[0]> scoreArray[1]) return this.setState({currentWinner: 'Player 1'})
      else return this.setState({currentWinner: 'Player 2'})
    }
  }

  player1Game = (move) => (
    this.setState({ player1Move: move })
  )

  player2Game = (move) => (
    this.setState({ player2Move: move })
  )

  checkWinner = () => {
    if (this.state.player1Score === this.state.player2Score) return 'Draw';
    else if (this.state.player1Score > this.state.player2Score) return 'Player 1';
    return 'Player 2';

  }

  storeMoves= () => {
    this.state.usedMoves.push(this.state.player1Move, this.state.player2Move);
  }

  render() {
    return (

      <div id="wrap">

        <div class="title"><h1>Rock Paper Scissors</h1></div>
        <div class="instructions">Instructions: To play rock-paper-scissors, two players must choose one of three items: rock, paper or scissors.
          <ul>
            <li>
              Rock wins over scissors (because rock smashes scissors)
            </li>
            <li>
              Scissors wins over paper (because scissors cut paper)
            </li>
            <li>
              Paper wins over rock (because paper covers rock)
            </li>
          </ul>
        </div>


        <div class="player1">
          Player 1: {this.state.player1Score}

        <h4 className='rock' onClick={() => this.player1Game('rock')}>Rock</h4>
          <h4 className='paper' onClick={() => this.player1Game('paper')}>Paper</h4>
          <h4 className='scissors' onClick={() => this.player1Game('scissors')}>Scissors</h4>


        </div>

        <div class="score-board">
          <h4 className='turn'>Current Turn: {this.state.currentTurn}</h4>
          <h4 className='winner'>Last Winner: {this.state.currentWinner}</h4>
          <button type="button" class="btn btn-primary" onClick={this.playGame}>Play</button>

        </div>



        <div class="player2">
          Player 2: {this.state.player2Score}
        <h4 className='rock' onClick={() => this.player2Game('rock')}>Rock</h4>
          <h4 className='paper' onClick={() => this.player2Game('paper')} >Paper</h4>
          <h4 className='scissors' onClick={() => this.player2Game('scissors')}>Scissors</h4>
        </div>


        <div class="footer">
          <h4 className='games-played'>Games Played: {this.state.turn}</h4>
          <h4 className='winner'>Current Winner: {this.checkWinner()}</h4>
          <h4 className='winner'>Most Used Items: {this.usedMoves()}</h4>

        </div>

      </div>
    );
  }
}

export default App;
