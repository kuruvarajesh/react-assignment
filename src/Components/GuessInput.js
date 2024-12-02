import React from 'react';

const GuessInput = ({ userGuess, setUserGuess, handleGuess }) => {
  return (
    <div className="guess-input">
      <p>Enter a number between 0 and 10:</p>
      <input
        type="number"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        className="input-box"
        min="0"
        max="10"
      />
      <button onClick={handleGuess} className="check-button">
        Check
      </button>
    </div>
  );
};

export default GuessInput;
