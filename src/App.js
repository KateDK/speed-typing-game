import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isGameOn, setIsGameOn] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const countWords = (text) => {
    const wordArr = text.trim().split(' ');
    return wordArr.filter((word) => word !== '').length;
  };
  useEffect(() => {
    if (timeRemaining > 0 && isGameOn) {
      setTimeout(() => setTimeRemaining((oldTime) => oldTime - 1), 1000);
    } else {
      setIsGameOn(false);
    }
  }, [timeRemaining, isGameOn]);

  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h4>Time remaining: {timeRemaining} seconds</h4>
      <button onClick={() => setIsGameOn(true)}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
