import React, { useState, useEffect } from 'react';

export default function Repeatwords() {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [buttonText, setButtonText] = useState("Random so'z chiqarish");

  useEffect(() => {
    const storedWords = JSON.parse(localStorage.getItem('words')) || [];
    setWords(storedWords);
  }, []);

  const getRandomWord = () => {
    if (words.length > 0) {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
      setButtonText("Yana bitta so'z chiqarish");
    } else {
      setCurrentWord("Hech qanday so'z yo'q.");
    }
  };

  const readWord = () => {
    const utterance = new SpeechSynthesisUtterance(currentWord);
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h1>{currentWord}</h1>
      <button onClick={getRandomWord}>{buttonText}</button>
      <button onClick={readWord}>So'zni o'qib berish</button>
    </div>
  );
}
