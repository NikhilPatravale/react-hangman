import React from "react";

type HangManWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  hasWon: boolean;
  hasLost: boolean;
};

function HangmanWord({
  wordToGuess,
  guessedLetters,
  hasWon,
  hasLost,
}: HangManWordProps) {
  return (
    <div>
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            fontSize: "4rem",
            width: "2rem",
            fontWeight: "bold",
            fontFamily: "monospace",
            borderBottom: "7px solid black",
            margin: "0 0.5rem",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || hasWon || hasLost
                  ? "visible"
                  : "hidden",
              color:
                hasLost && !guessedLetters.includes(letter) ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
