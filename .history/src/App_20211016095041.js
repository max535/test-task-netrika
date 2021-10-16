import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="frame">
        <span><Counter /></span>
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;