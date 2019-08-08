import React from 'react';

const Display = (props) => {

    return(
        <div className="display">
            <h3>Display</h3>
            <p>Ball: <span data-testid="ball">{props.ball}</span></p>
            <p>Strike: <span data-testid="strike">{props.strike}</span></p>
        </div>
    )
}

export default Display;