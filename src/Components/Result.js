import React from 'react';

const Result = ({ number, handleReset }) => {
  return (
    <div className="result">
      <h2>Congratulations! 🎉</h2>
      <p>You guessed the correct number: <span className="number">{number}</span></p>
      <button onClick={handleReset} className="reset-button">
        Play Again
      </button>
    </div>
  );
};

export default Result;
