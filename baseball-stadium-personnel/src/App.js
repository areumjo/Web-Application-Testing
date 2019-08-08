import React, { useState, useEffect } from 'react';
import './App.css';

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
      <div className="display">
        <h3>Display</h3>
        <p>Ball: {ball}</p>
        <p>Strike: {strike}</p>
      </div>
      <div className="dashboard">
        <button onClick={strikeBtn}>Strike</button>
        <button onClick={ballBtn}>Ball</button>
        <button onClick={foulBtn}>Foul</button>
        <button onClick={hitBtn}>Hit</button>
      </div>
    </div>
  );
}

export default App;
