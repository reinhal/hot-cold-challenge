import React from 'react';
import './Guesses.css';

export default function Guesses(props) {
    console.log(props.guesses);
    const guessList = props.guesses.map(function(guess, i) {
        return <li className="pastGuesses" key={i}>{guess}</li>
    })
    return (
        <ul className="showGuesses">
            {guessList}
        </ul>
    );
}