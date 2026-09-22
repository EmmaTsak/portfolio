import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === 'dark'
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
      title={
        theme === 'dark'
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}