import React from 'react';

function Scoreboard(props) {
    console.log(props.strike);

    return (
        <div className='scoreboard '>
            <h1 className='display' >{props.strike}  <span className='label'>Strike</span></h1>
        <h1 className='display' >{props.ball} <span className='label'>Ball</span></h1>
        <h1 className='display' >{props.out} <span className='label'>Outs</span></h1>
        <h1 className='display' >{props.hit} <span className='label'>Hits</span></h1>

        </div>
    )
};

export default Scoreboard;