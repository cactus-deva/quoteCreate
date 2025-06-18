import { useState, useEffect, useContext } from "react";
import { getQuote } from "../api/api";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeTheme";
import { Loader } from "./Loader";

export default function RandomQuotePage() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [quote, setQuote] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getQuote();
      setQuote(...res);
    } catch (error) {
      console.log("Data not found >> ", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className={`flex flex-col min-h-screen w-full text-sm md:text-lg
            ${
              isDarkMode
                ? "bg-gradient-to-r from-black to-white"
                : "bg-[#A8D5BA]"
            }`}
    >
      <Link
        to="/"
        className={`flex items-center justify-center hover:shadow-[0_0_15px_3px_rgba(72,187,120,0.8)] text-black font-semibold transition-all duration-300" bg-[#C1E1C1] hover:bg-green-100 w-[100px] md:w-[200px] h-[30px] md:h-[50px] rounded-md m-3 text-center`}
      >
        BACK
      </Link>
      <div
        className={`flex flex-col justify-center items-center p-10 lg:m-40 xl:m-20`}
      >
        {quote.length === 0 ? (
          <div>
             <Loader />
          </div>
        ) : (
          <div className={`rounded-2xl bg-white bg-opacity-50 p-6 text-center`}>
            <h1 className="text-md md:text-4xl lg:text-5xl font-bold">
              {quote.quote}
            </h1>
            <h3 className="text-gray-600 md:text-xl lg:text-2xl mt-5 text-[14px]">
              {quote.author}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
