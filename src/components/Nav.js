import React, { Fragment } from 'react';
import './Nav.css';
/* This is  a stateless componenet */

export default function Nav(props) {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <a 
                            href="#new-game" 
                            className="new-game"
                            aria-label="Start a new game"
                            onClick={() => props.restartGame()}
                        >
                        + NEW GAME
                        </a>
                    </li> 
                </ul>
            </nav>
            <header className="HotCold-header">
                <h1><span className="hot">HOT</span> or <span className="cold">COLD</span></h1>
            </header>
        </Fragment>
    );
}