import { useContext } from "react";
import SearchQuote from "./SearchQuote";
import { DarkModeContext } from "../context/darkModeTheme";

export const Header = (props) => {
  const { term, setTerm, onSubmit } = props;
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`flex justify-between items-baseline font-bold px-4 py-2 
              ${
                isDarkMode
                  ? "bg-gradient-to-r from-black to-white"
                  : "bg-[#A8D5BA]"
              }`}
    >
      <h1 className="text-md md:text-2xl text-white">QUOTE OF THE DAY</h1>

      <div className={`flex items-center justify-center`}>
        <SearchQuote onSubmit={onSubmit} term={term} setTerm={setTerm} />
        <button
          className={`rounded-[50%] hover:bg-blue-300 px-3 py-2 m-2
                ${
                  isDarkMode
                    ? "bg-indigo-800 text-white"
                    : " bg-white text-black"
                }`}
          onClick={toggleDarkMode}
        >
          <svg
            className="w-3 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21.053 15.806a10 10 0 01-8.8-15.71A10.003 10.003 0 002 12a10 10 0 0019.053 3.806z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
