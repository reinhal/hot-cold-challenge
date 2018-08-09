import React, { Fragment } from 'react';
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
      this.setState({feedback: 'Please enter a valid number!'});
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
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    const { feedback, guesses } = this.state;
    const guessNumber = guesses.length; 
    return (
      <Fragment>
        <div className="App">
              <Nav restartGame={() => this.restartGame()} />
        </div>
        <div className="row">
          <div className="col-6-left">
            <div>
              <section className="instructions">
                <Instructions />
              </section>
            </div>
          </div>
          <div className="col-6-right">
            <main role="main" className="container">
              <section role="region" aria-label="Guess section">
                <Feedback feedback={feedback} />
                <GuessForm onMakeGuess={guess => this.makeGuess(guess)} />
                <GuessNumber guessNumber={guessNumber} />
                <Guesses guesses={guesses}/>
              </section>
            </main>
          </div>
        </div>
      </Fragment>
    );
  }
}