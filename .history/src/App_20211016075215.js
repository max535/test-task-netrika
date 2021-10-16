import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Frame">
        <Counter style={{'background-color': '#FFF'}} />
        <Counter className="Red" />
        <Counter className="Lime" />
      </div>
    </div>
  );
}

export default App;