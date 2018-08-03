import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <a href="#">WHAT?</a>
          <a href="#">+NEW GAME</a>
        </nav>
        <header className="HotCold-header">
          <h1 className="HotCold-title">HOT or COLD</h1>
        </header>
        <div className="container">
          <h2 className="feedback">HOT</h2>
          <form>
            <label htmlFor="guess-0">Enter Your Guess</label>
            <input type="text" id="guess-0" />
            <button>Guess</button>
          </form>
          <h2 className="guess-number">Guess #10!</h2>
          <ul>
            <li>
              <p className="guess-1">34</p>
              <p className="guess-2">40</p>
              <p className="guess-3">42</p>
              <p className="guess-4">37</p>
            </li>
          </ul>
        </div>
        <section className="instructions">
          <h2>What Do I Do?</h2>
          <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
          <ol>
            <li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
            <li>You need to guess until you can find the hidden secret number.</li>
            <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
          </ol>
          <p>So, Are you ready?</p>
          <button>Got it!</button>
        </section>
      </div>
    );
  }
}

export default App;