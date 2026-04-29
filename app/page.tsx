'use client';

import { useState, useEffect } from 'react';
import { wordsList } from '../data/words';
import SpanishButton from '../components/SpanishButton';
import EnglishButton from '../components/EnglishButton';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);

  useEffect(() => {
    const newList = wordsList.map(item => item[language as 'es' | 'en']);
    setDisplayedWords(newList);
  }, [language]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Lista de palabras dinámica</h1>
      <div>
        <SpanishButton currentLang={language} onLanguageChange={setLanguage} />
        <EnglishButton currentLang={language} onLanguageChange={setLanguage} />
      </div>

      <h2>Palabras en {language === 'es' ? 'español' : 'inglés'}:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {displayedWords.map((word, index) => (
          <li key={index} style={{ margin: '8px 0', fontSize: '1.2rem' }}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}