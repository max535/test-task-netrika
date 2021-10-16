import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="Frame">
        <Counter className="Red" />
        <Counter className="Blue" />
        <Counter className="Lime" />
      </div>
    </div>
  );
}

export default App;