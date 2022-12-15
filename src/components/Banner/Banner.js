import React from 'react';

function HappyMessage({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  );
}

function SadMessage({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ status, answer, guesses }) {
  return status === 'won' ? (
    <HappyMessage guesses={guesses} />
  ) : (
    <SadMessage answer={answer} />
  );
}

export default Banner;
