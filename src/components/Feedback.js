import React from 'react';
import './Feedback.css';

export default function Feedback(props) {
    const key = props.guessNumber;
    let guessAgain;
    if (key !== 0) {
        guessAgain = <p>Guess again!</p>
    }
    return (
        <h2 
        key={key}
        className="feedback"
        >
        {props.feedback} {guessAgain}
        </h2>
    ); 
}