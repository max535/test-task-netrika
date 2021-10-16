import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter className="White" />
      <Counter className="Red" />
      <Counter className="Green" />
    </div>
  );
}

export default App;