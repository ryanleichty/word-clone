import React from 'react';

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessResults, setGuessResults] = React.useState([]);

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessResults={guessResults}
        setGuessResults={setGuessResults}
      />
    </>
  );
}

export default Game;
