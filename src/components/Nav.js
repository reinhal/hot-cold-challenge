import React from 'react';

import './Nav.css';

export default function Nav(props) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#" className="what">WHAT?</a>
                </li>
                <li>
                    <a href="#" className="new-game">+NEW GAME</a>
                </li> 
            </ul>
        </nav>
    );
}