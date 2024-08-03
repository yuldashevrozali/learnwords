import React, { useState } from 'react';

export default function Newwords() {
  const [word, setWord] = useState('');

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (word.trim()) {
      const words = JSON.parse(localStorage.getItem('words')) || [];
      words.push(word);
      localStorage.setItem('words', JSON.stringify(words));
      setWord(''); // Clear the input
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={word} 
          onChange={handleChange} 
          placeholder="Yangi so'zni kiriting" 
        />
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
}
