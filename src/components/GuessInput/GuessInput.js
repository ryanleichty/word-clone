import React from 'react';

function GuessInput({ guess, setGuess, guessResults, setGuessResults }) {
  function handleSubmit(event) {
    event.preventDefault();

    setGuessResults([...guessResults, guess]);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
