// components/EnglishButton.tsx
import React from 'react';

interface Props {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const EnglishButton: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  return (
    <button
      onClick={() => onLanguageChange('en')}
      style={{
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: currentLang === 'en' ? '#2196F3' : '#f0f0f0',
        color: currentLang === 'en' ? 'white' : 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      English
    </button>
  );
};

export default EnglishButton;