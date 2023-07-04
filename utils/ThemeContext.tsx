import {
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

export type Theme = 'light' | 'dark';
export type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeProvider = ({ children }: any): JSX.Element => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const rawStoredTheme = localStorage.getItem('theme');
    const hasStoredTheme = typeof rawStoredTheme === 'string';

    // If the user has a set preference, use that
    if (hasStoredTheme) {
      setTheme(rawStoredTheme as Theme);
    }
  }, []);

  // Ensure the class gets applied to the HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Persist the current theme to storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', // Provide an initial theme.
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {}, // Provide an initial setTheme function.
});
