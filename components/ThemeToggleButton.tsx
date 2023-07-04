import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../utils/ThemeContext';
import Image from 'next/image';

const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      <div
        className={`relative ${
          theme === 'light' ? 'w-4.5 h-4.5 opacity-80' : 'w-6 h-6'
        }`}
      >
        <Image
          src={theme === 'light' ? '/icons/moon.svg' : '/icons/sun.svg'}
          alt="theme icon"
          fill={true}
          sizes="(min-width: 1rem) 24vw"
          loading="lazy"
        />
      </div>
    </button>
  );
};

export default ThemeToggleButton;
