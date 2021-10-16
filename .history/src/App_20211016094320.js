import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="frame">
        <div style={{background: "#FFF", width: '120px', height: '40px'}}><Counter /></div>
        <Counter className="Blue" />
        <Counter className="Lime" />
      </div>
    </div>
  );
}

export default App;