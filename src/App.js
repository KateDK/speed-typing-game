import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  return (
    <div className="App">
      <h1>Title</h1>
      <textarea
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <h4>Time remaining: </h4>
      <h1>Word count: </h1>
    </div>
  );
}

export default App;
