import React from 'react';


/* This is  a stateful component */
export default class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        if (this.props.onMakeGuess) {
            const value = this.input.value;
            this.props.onMakeGuess(value);
        }
        this.input.value = "";
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="guess-0">Enter Your Guess</label>
                <input 
                type="number"
                id="guess-0"
                name="guess-0"
                min="1"
                max="100"
                aria-label="Enter your guess"
                />
                <button
                    type="submit"
                    name="submit"
                    id="guessButton"
                    className="button"
                >
                    Guess
                </button>
            </form>
        );
    }
}