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
                            onCLick={() => props.restartGame()}
                        >
                        + NEW GAME
                        </a>
                    </li> 
                </ul>
            </nav>
        </Fragment>
    );
}