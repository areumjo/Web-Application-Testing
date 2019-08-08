import React from 'react';

const Display = (props) => {
    console.log(props);
    return(
        <div className="display">
            <h3>Display</h3>
            <p>Ball: {props.ball}</p>
            <p>Strike: {props.strike}</p>
        </div>
    )
}

export default Display;