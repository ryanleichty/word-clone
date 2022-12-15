import React from 'react';

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];

    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
      {status !== 'running' && (
        <Banner status={status} answer={answer} guesses={guesses} />
      )}
    </>
  );
}

export default Game;
