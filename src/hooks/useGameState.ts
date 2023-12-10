import { useCallback, useEffect, useState } from "react";
import { maxGuess } from "../constants";
import getWordToGuess from "../utils/getWordToGuess";

const useGameState = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(getWordToGuess);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [hasLost, setHasLost] = useState<boolean>(false);
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const resetState = () => {
    setWordToGuess(getWordToGuess());
    setGuessedLetters([]);
    setHasWon(false);
    setHasLost(false);
  };
  const addGuessedLetter = useCallback(
    (key: string) => {
      if (guessedLetters.includes(key)) return;
      setGuessedLetters((currentLetters) => [...currentLetters, key]);
    },
    [guessedLetters]
  );
  const onEnterPressHandler = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Enter") return;

      e.preventDefault();
      if (hasWon || hasLost) resetState();
    },
    [hasWon, hasLost]
  );

  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    if (
      wordToGuess
        .split("")
        .every((letter: string) => guessedLetters.includes(letter))
    ) {
      setHasWon(true);
    }

    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters, addGuessedLetter]);

  useEffect(() => {
    setHasLost(() => incorrectGuesses.length === maxGuess);
  }, [incorrectGuesses]);

  useEffect(() => {
    document.addEventListener("keypress", onEnterPressHandler);

    return () => document.removeEventListener("keypress", onEnterPressHandler);
  }, [hasWon, hasLost, onEnterPressHandler]);

  return {
    wordToGuess,
    guessedLetters,
    incorrectGuesses,
    hasWon,
    hasLost,
    addGuessedLetter,
  };
};

export default useGameState;
