import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter className="White" />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;