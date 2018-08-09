import React from 'react';


/* This is  a stateful component */
export default class GuessForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        if (this.props.onMakeGuess) {
            const value = event.target.userGuess.value;
            console.log(value);
            this.props.onMakeGuess(value);
        }
        event.target.userGuess.value = "";
    }
    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <label htmlFor="userGuess">Enter Your Guess </label>
                <input 
                    type="number"
                    name="userGuess"
                    aria-label="Enter your guess"
                />
                <button
                    type="submit"
                    name="submit"
                    className="button"
                >
                    Guess
                </button>
            </form>
        );
    }
}