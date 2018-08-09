import React from 'react';
import Nav from './Nav';
import Feedback from './Feedback';
import GuessForm from './GuessForm';
import GuessNumber from './GuessNumber';
import Guesses from './Guesses';
import Instructions from './Instructions';

import './App.css';
/* This is  a stateful component */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make Your Guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: "Make your guess!",
      correctAnswer: Math.round(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number!'});
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You are Ice Cold!';
    } else if (difference >= 30) {
      feedback = 'You are Cold!';
    } else if (difference >= 10) {
      feedback = 'You are Warm!';
    } else if (difference >= 1) {
      feedback = 'You are HOT!';
    } else {
      feedback = 'You Got the Right Number!!!';
    }

    this.setState({
      feedback, 
      guesses: [this.state.guesses, guess]
    });
  }

  render() {
    const { feedback, guesses } = this.state;
    const guessNumber = guesses.length; 
    return (
      <div className="App">
        <Nav onRestartGame={() => this.restartGame()} />
        <header className="HotCold-header">
          <h1 className="HotCold-title">HOT or COLD</h1>
        </header>
        <section className="instructions">
          <Instructions />
        </section>
        <main role="main" className="container">
          <section aria-label="Guess section">
          <Feedback feedback={feedback} />
          <GuessForm onMakeGuess={guess => this.onMakeGuess(guess)} />
          <GuessNumber guessNumber={guessNumber} />
          </section>
          <ul>
            <li>
              <Guesses />
              <p className="guess-1">40</p>
              <p className="guess-2">42</p>
              <p className="guess-3">37</p>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}