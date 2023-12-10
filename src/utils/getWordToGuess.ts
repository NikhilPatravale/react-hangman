import Words from "../words.json";

const getWordToGuess = () =>
  Words[Math.floor(Math.random() * Words.length)].toUpperCase();

export default getWordToGuess;
