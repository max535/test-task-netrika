import React from 'react';
import Counter from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="frame">
        <div style={{background: '#FFF', borderRadius: '4px'}}><Counter /></div>
        <div style={{background: '#FFA7A7', borderRadius: '4px'}}><Counter /></div>
        <div style={{background: '#77FF9D', borderRadius: '4px'}}><Counter /></div>
      </div>
    </div>
  );
}

export default App;