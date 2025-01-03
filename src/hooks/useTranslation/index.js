import { useState } from 'react';

const useTranslation = () => {
  const [language, setLanguage] = useState('pt-BR');

  return language;
};

export default useTranslation;
