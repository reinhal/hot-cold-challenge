import React from 'react';
import './Guesses.css';

export default function Guesses(props) {
    return (
        <ul className="showGuesses">
            {props.guesses}
        </ul>
    );
}