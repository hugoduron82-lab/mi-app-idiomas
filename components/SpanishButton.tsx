// components/SpanishButton.tsx
import React from 'react';

interface Props {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const SpanishButton: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  return (
    <button
      onClick={() => onLanguageChange('es')}
      style={{
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: currentLang === 'es' ? '#4CAF50' : '#f0f0f0',
        color: currentLang === 'es' ? 'white' : 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Español
    </button>
  );
};

export default SpanishButton;