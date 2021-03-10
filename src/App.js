import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');

  const countWords = (text) => {
    const wordArr = text.trim().split(' ');
    return wordArr.filter((word) => word !== '').length;
  };

  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h4>Time remaining: </h4>
      <button onClick={() => console.log(countWords(inputVal))}>Start</button>
      <h1>Word count: </h1>
    </div>
  );
}

export default App;
