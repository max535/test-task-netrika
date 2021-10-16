import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="frame">
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;