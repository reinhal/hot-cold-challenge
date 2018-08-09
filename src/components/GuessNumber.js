import React from 'react';

import './GuessNumber.css';

export default function GuessNumber(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';
   
    return (
        <h2 className="guess-number">
            You have made {props.guessNumber} {guessNoun}.
        </h2>
    );
}
