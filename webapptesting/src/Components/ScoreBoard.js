import React from 'react';

function Scoreboard(props) {
    console.log(props.strike);

    return (
        <div className='scoreboard '>
            <h1 className='display' >{props.strike}  <span className='label'>Strike</span> <spnn><img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png' alt='missing'/></spnn></h1>
        <h1 className='display' >{props.ball} <span className='label'>Ball</span> <spnn><img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png' alt='missing'/></spnn></h1>
        <h1 className='display' >{props.out} <span className='label'>Outs</span> <spnn><img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png' alt='missing'/></spnn></h1>
        <h1 className='display' >{props.hit} <span className='label'>Hits</span> <spnn><img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png' alt='missing'/></spnn></h1>

        </div>
    )
};

export default Scoreboard;