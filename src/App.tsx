import HangManDrawing from "./components/HangManDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import { WON_MESSAGE, LOST_MESSAGE } from "./constants";
import useGameState from "./hooks/useGameState";

function App() {
  const {
    wordToGuess,
    guessedLetters,
    incorrectGuesses,
    hasWon,
    hasLost,
    addGuessedLetter,
  } = useGameState();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
        hidden={!(hasWon || hasLost)}
      >
        {hasWon && <span>{WON_MESSAGE}</span>}
        {hasLost && <span>{LOST_MESSAGE}</span>}
      </div>
      <HangManDrawing incorrectGuesses={incorrectGuesses.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        hasWon={hasWon}
        hasLost={hasLost}
      />
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
          hasWon={hasWon}
          hasLost={hasLost}
        />
      </div>
    </div>
  );
}

export default App;
