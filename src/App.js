import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const gameDuration = 5;
  const [inputVal, setInputVal] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(gameDuration);
  const [isGameOn, setIsGameOn] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);
  const countWords = (text) => {
    const wordArr = text.trim().split(' ');
    return wordArr.filter((word) => word !== '').length;
  };
  const startGame = () => {
    setInputVal('');
    setIsGameOn(true);
    setTimeRemaining(gameDuration);
    textBoxRef.current.disabled = false;
    console.log(textBoxRef);
    textBoxRef.current.focus();
  };

  const endGame = () => {
    setWordCount(countWords(inputVal));
    setIsGameOn(false);
  };

  useEffect(() => {
    if (timeRemaining > 0 && isGameOn) {
      setTimeout(() => setTimeRemaining((oldTime) => oldTime - 1), 1000);
    } else {
      endGame();
    }
  }, [timeRemaining, isGameOn]);

  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea
        ref={textBoxRef}
        value={inputVal}
        disabled={!isGameOn}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h4>Time remaining: {timeRemaining} seconds</h4>
      <button disabled={isGameOn} onClick={() => startGame()}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
