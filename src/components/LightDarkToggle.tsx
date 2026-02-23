import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function LightDarkToggle() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // get cached val, else defaults to darkmode
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  // flips the theme
  const toggleTheme = () => {
    const newTheme = !isLightMode;
    setIsLightMode(newTheme);
    
    // toggle override defaults to light mode + cache key
    if (newTheme) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  if (!mounted) {
    return <div className="w-9 h-9 p-2" aria-hidden="true" />; 
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-slate-800 text-foreground hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label="Toggle light dark mode"
    >
      {isLightMode ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}