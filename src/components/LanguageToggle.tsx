import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'el';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const currentLanguage: Language =
    i18n.resolvedLanguage?.startsWith('el') ? 'el' : 'en';

  const changeLanguage = async (language: Language) => {
    await i18n.changeLanguage(language);

    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <button
        type="button"
        className="language-switch"
        onClick={() =>
        changeLanguage(currentLanguage === 'en' ? 'el' : 'en')
        }
        aria-label={
        currentLanguage === 'en'
            ? 'Switch to Greek'
            : 'Switch to English'
        }
    >
        {currentLanguage === 'en' ? 'EL' : 'EN'}
    </button>
    );
}