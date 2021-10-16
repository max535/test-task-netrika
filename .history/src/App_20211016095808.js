import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="frame">
        <div style={{background: '#FFF'}}><Counter /></div>
        <div style={{background: '#FFA7A7'}}><Counter /></div>
        <div style={{background: '#77FF9D'}}><Counter /></div>
      </div>
    </div>
  );
}

export default App;