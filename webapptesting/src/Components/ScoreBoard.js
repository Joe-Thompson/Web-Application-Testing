import React from 'react';

function Scoreboard(props) {
    console.log(props.strike);

    return (
        <div>
        <h1>{props.strike}</h1>
        <h1>{props.ball}</h1>
        <h1>{props.out}</h1>
        <h1>{props.hit}</h1>

        </div>
    )
};

export default Scoreboard;