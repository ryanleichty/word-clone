import React from 'react';

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guess, index) => (
        <p key={`${guess}-${index}`} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
