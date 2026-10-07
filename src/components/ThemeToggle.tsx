import {
  useEffect,
  useState,
} from 'react';
import {
  Moon,
  Sun,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const savedTheme =
    localStorage.getItem(
      'portfolio-theme'
    );

  if (
    savedTheme === 'light' ||
    savedTheme === 'dark'
  ) {
    return savedTheme;
  }

  return 'dark';
}

export function ThemeToggle() {
  const { t } = useTranslation();

  const [theme, setTheme] =
    useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme;

    localStorage.setItem(
      'portfolio-theme',
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark'
        ? 'light'
        : 'dark'
    );
  };

  const label =
    theme === 'dark'
      ? t('ui.theme.switchToLight')
      : t('ui.theme.switchToDark');

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </button>
  );
}