import React, { Component } from 'react';
import Nav from './Nav';
import Feedback from './Feedback';
import GuessForm from './GuessForm';
import GuessNumber from './GuessNumber';
import Guesses from './Guesses';
import Instructions from './Instructions';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make Your Guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="HotCold-header">
          <h1 className="HotCold-title">HOT or COLD</h1>
        </header>
        <div className="container">
          <Feedback />
          <GuessForm />
          <GuessNumber />
          <ul>
            <li>
              <Guesses />
              <p className="guess-1">40</p>
              <p className="guess-2">42</p>
              <p className="guess-3">37</p>
            </li>
          </ul>
        </div>
        <section className="instructions">
          <Instructions />
        </section>
      </div>
    );
  }
}