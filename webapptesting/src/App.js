import React, { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import Scoreboard from "./Components/ScoreBoard";

function App() {

  //imports for testing files
  // import '@testing-library/jest-dom/extend-expect'
  // import {render, fireEvent} from '@testing-library/react'

  const [strike, setStrike] = useState(0);
  const [foul, setFoul] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  const [out, setOut] = useState(0);

  return (
    <div className="App">

      <h1 className='title'><span><img className='logo' src='https://www.pnglot.com/pngfile/detail/10-102237_boston-red-sox-boston-red-sox-logo-1908.png' alt='missing'/></span>Red Sox Score Keeper</h1>
    <Scoreboard strike={strike} foul={foul} ball={ball} hit={hit} out={out} />
    <Dashboard
               strike={strike} setStrike={setStrike}
               foul={foul} setFoul={setFoul}
               ball={ball} setBall={setBall}
               hit={hit} setHit={setHit}
               out={out} setOut={setOut}
    />

    </div>
  );
}

export default App;
