import React, { useState, useEffect } from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

  const strikeBtn = () => {
    if (strike === 2) {
      setStrike(0)
      setBall(0)
    } else {
      setStrike(strike + 1)
    }
  }
  const ballBtn = () => {
    if (ball === 3) {
      setStrike(0)
      setBall(0)
    } else {
      setBall(ball + 1)
    }
  }
  const foulBtn = () => {
    if (strike === 2) {
      setStrike(2)
    } else {
      setStrike(strike + 1)
    }
  }
  const hitBtn = () => {
    setStrike(0);
    setBall(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Baseball Stadium Pesonnel
        </h2>
      </header>
      <Display ball={ball} strike={strike}/>
      <Dashboard strikeBtn={strikeBtn} ballBtn={ballBtn} foulBtn={foulBtn} hitBtn={hitBtn}/>
    </div>
  );
}

export default App;
