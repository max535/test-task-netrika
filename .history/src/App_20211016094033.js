import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="frame">
        <div style={{background: "red"}}><Counter /></div>
        <Counter className="Blue" />
        <Counter className="Lime" />
      </div>
    </div>
  );
}

export default App;