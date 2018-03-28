import React, { Component } from 'react';
import '../styles/layout.css';
import '../styles/App.css';

class App extends Component {
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
          Player 1: 0
        
        <h4 className = 'rock'>Rock</h4>
        <h4 className = 'paper'>Paper</h4>
        <h4 className = 'scissors'>Scissors</h4>

        </div>
        
        <div class="score-board">

        </div>



        <div class="player2">
        Player 2: 0
        <h4 className = 'rock'>Rock</h4>
        <h4 className = 'paper'>Paper</h4>
        <h4 className = 'scissors'>Scissors</h4>
        </div>


        <div class="footer"></div>

      </div>
    );
  }
}

export default App;
