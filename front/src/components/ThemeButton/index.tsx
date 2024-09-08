'use client'
import { useTheme } from "@/context/themeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="focus:outline-none p-2 rounded-full bg-gray-200 dark:bg-darkBackground mr-2"
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
