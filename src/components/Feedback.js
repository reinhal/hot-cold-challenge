import React from 'react';
import './Feedback.css';

export default function Feedback(props) {
    const key = props.guessNumber;
    
    return (
        <h2 
        key={key}
        className="feedback"
        >
        {props.feedback}
        </h2>
    ); 
}