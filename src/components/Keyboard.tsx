import React from "react";
import styles from "./Keyboard.module.css";

const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  guessedLetters: string[];
  wordToGuess: string;
  hasWon: boolean;
  hasLost: boolean;
};

function Keyboard({
  addGuessedLetter,
  guessedLetters,
  wordToGuess,
  hasWon,
  hasLost,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive =
          guessedLetters.includes(key) && wordToGuess.includes(key);
        const disabled = guessedLetters.includes(key);
        return (
          <button
            key={key}
            disabled={disabled || hasWon || hasLost}
            className={`${styles.btn} ${isActive ? styles.active : ""}`}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
