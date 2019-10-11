import React, { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import Scoreboard from "./Components/ScoreBoard";

function App() {

  const [strike, setStrike] = useState(0);
  const [foul, setFoul] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  const [out, setOut] = useState(0);

  return (
    <div className="App">

      <h1 className='title'>Red Sox Score Keeper</h1>
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
