import React, { useState, useEffect, useContext } from "react";
import { getQuote } from "../api/api";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeTheme";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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

  if (quote.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        {[...Array(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center h-full w-full py-[20px] rounded-md mt-[10%] p-[40px]"
            >
              <SkeletonTheme baseColor="lightblue" highlightColor="turquoise">
                <Skeleton
                  count={10}
                  circle={30}
                  height={30}
                  containerClassName="flex-1"
                />
              </SkeletonTheme>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div
      className={`flex flex-col h-screen text-[13px] md:text-[20px]
            ${
              isDarkMode
                ? "bg-gradient-to-r from-black to-white"
                : "bg-[#A8D5BA]"
            }`}
    >
      <Link
        to="/"
        className={`bg-[#C1E1C1] hover:bg-green-50 w-[150px] md:w-[250px] h-[30px] md:h-[50px] rounded-md p-2 m-3 text-black text-center
                ${isDarkMode ? "bg-white" : "bg-[#A8D5BA]"}`}
      >
        Back to Home
      </Link>

      <div
        className={`flex flex-col justify-center items-center mt-[10%] p-10 lg:m-20 xl:m-10`}
      >
        <div className={`rounded-2xl bg-white bg-opacity-50 p-6 text-center`}>
          <h1 className="text-[20px] md:text-4xl lg:text-5xl font-bold">
            {quote.quote}
          </h1>
          <h3 className="text-gray-600 md:text-xl lg:text-2xl mt-5 text-[14px]">
            {quote.author}
          </h3>
        </div>
      </div>
    </div>
  );
}
