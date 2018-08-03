import React from 'react';

export default function GuessForm(props) {
    return (
        <form>
            <label htmlFor="guess-0">Enter Your Guess</label>
            <input type="text" id="guess-0" />
            <button>Guess</button>
        </form>
    );
}