import React from 'react';

function Dashboard(props) {
    console.log(props.strike);

    function strikeHandler(e) {
        e.preventDefault();
        if (props.strike < 2) {
            props.setStrike(props.strike + 1);
        } else if ( props.strike === 2 && props.out === 2) {
            props.setStrike(props.strike + 1);
            props.setOut(props.out + 1);
            props.setFoul(0);
            props.setBall(0);
            props.setStrike(0);
            props.setOut(0);
            props.setHit(0);
        } else {
            props.setStrike(props.strike + 1);
            props.setOut(props.out + 1);
            props.setFoul(0);
            props.setBall(0);
            props.setStrike(0);
        }
    }

    function foulHandler(e) {
        e.preventDefault();
        if (props.strike < 2) {
            props.setStrike(props.strike + 1);
        }
    }

    function ballHandler(e) {
        e.preventDefault();
        if (props.ball < 3) {
            props.setBall(props.ball + 1);
        } else {
            props.setBall(props.ball + 1);
            props.setFoul(0);
            props.setBall(0);
            props.setStrike(0);
        }
    }

    function hitHandler(e) {
        e.preventDefault();
        props.setHit(props.hit + 1);
        props.setFoul(0);
        props.setBall(0);
        props.setStrike(0);
    }

    return (
        <div className='dashboard' >
            {/* eslint-disable-next-line jsx-a11y/aria-role */}
            <button role='strike' className='strikeBtn' onClick={strikeHandler} >Strike</button>
            <button className='foulBtn' onClick={foulHandler} >Foul</button>
            <button className='ballBtn' onClick={ballHandler} >Ball</button>
            {/* eslint-disable-next-line jsx-a11y/aria-role */}
            <button role='hit' className='hitBtn' onClick={hitHandler} >Hit</button>

        </div>
    )
};

export default Dashboard;