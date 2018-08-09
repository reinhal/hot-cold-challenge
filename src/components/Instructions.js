import React from 'react'
import './Instructions.css';
/* This is  a stateless componenet */

export default function Instructions(props) {
    return (
        <div id="instructions">
            <h2>How Do I Play?</h2>
            <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
            <ol>
                <li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
                <li>You need to guess until you can find the hidden secret number.</li>
                <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
            </ol>
            <p>Good Luck!</p>
        </div>
    );
}