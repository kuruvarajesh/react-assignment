import React, { useState } from 'react';

import './App.css';
import GuessInput from './Components/GuessInput';
import Result from './Components/Result';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 11));
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleGuess = () => {
    if (parseInt(userGuess) === randomNumber) {
      setIsCorrect(true);
    } else {
      alert("Wrong guess! Try again.");
    }
  };

  const handleReset = () => {
    setRandomNumber(Math.floor(Math.random() * 11));
    setUserGuess('');
    setIsCorrect(false);
  };

  return (
    <div className="app">
      <h1>Guess the Number</h1>
      {!isCorrect ? (
        <GuessInput
          userGuess={userGuess}
          setUserGuess={setUserGuess}
          handleGuess={handleGuess}
        />
      ) : (
        <Result number={randomNumber} handleReset={handleReset} />
      )}
    </div>
  );
};

export default App;
