import React, { useState, useEffect } from 'react';

export default function Repeatwords2() {
  const [words, setWords] = useState([]);
  const [remainingWords, setRemainingWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [buttonText, setButtonText] = useState("Random so'z chiqarish");
  const [allWordsDisplayed, setAllWordsDisplayed] = useState(false);

  useEffect(() => {
    const storedWords = JSON.parse(localStorage.getItem('words')) || [];
    setWords(storedWords);
    setRemainingWords(shuffleArray(storedWords));
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getRandomWord = () => {
    if (remainingWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingWords.length);
      const word = remainingWords[randomIndex];
      setCurrentWord(word);
      setRemainingWords(remainingWords.filter((_, index) => index !== randomIndex));
      setButtonText("Yana bitta so'z chiqarish");
    } else {
      setCurrentWord("Ajoyib! Siz tugatdingiz.");
      setAllWordsDisplayed(true);
    }
  };

  const readWord = () => {
    if (currentWord && currentWord !== "Ajoyib! Siz tugatdingiz.") {
      const utterance = new SpeechSynthesisUtterance(currentWord);
      utterance.lang = 'uz-UZ'; // Set the language to Uzbek if needed
      speechSynthesis.speak(utterance);
    }
  };

  const resetWords = () => {
    setRemainingWords(shuffleArray(words));
    setCurrentWord('');
    setButtonText("Random so'z chiqarish");
    setAllWordsDisplayed(false);
  };

  return (
    <div>
      <h1>{currentWord}</h1>
      <button onClick={getRandomWord}>{buttonText}</button>
      <button onClick={readWord} disabled={allWordsDisplayed}>So'zni o'qib berish</button>
      {allWordsDisplayed && <button onClick={resetWords}>Yana boshidan</button>}
    </div>
  );
}
