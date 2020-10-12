import React,{useEffect, useRef, useState} from 'react';
import './App.css';
import useWordGame from './hooks/useWordGame'


function App() {
  
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
} = useWordGame(5)


  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea ref={textBoxRef}  value={text} onChange={handleChange} disabled={!isTimeRunning}>
      </textarea>
  <h4>Time remaining: {timeRemaining}</h4>
      <button  onClick={startGame} disabled={isTimeRunning}>Start</button>
  <h1>Word Count:{wordCount}</h1>
    </div>
  );
}

export default App;
