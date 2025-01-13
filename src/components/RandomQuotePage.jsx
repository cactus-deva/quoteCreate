import React, { useState, useEffect, useContext } from "react";
import RandomQuoteApi from "../api/api";
import { Link } from "react-router-dom";
import { DarkModeContext } from '../context/darkModeTheme';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

export default function RandomQuotePage() {
    const { isDarkMode } = useContext(DarkModeContext)
    const [quote, setQuote] = useState([])

    const fetchData = async () => {
        try {
            const res = await RandomQuoteApi()
            setQuote(...res)
        } catch (error) {
            console.log("Data not found >> ", error);
        }
    }

    useEffect(() => {
        fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 6000);

        return () => clearInterval(interval)
    }, [])
    
    if (quote.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center">
                {[...Array(3)].map((_, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center h-full w-full py-[20px] rounded-md">
                            <SkeletonTheme baseColor="lightblue" highlightColor="turquoise">
                                <Skeleton count={6} height={30} containerClassName="flex-1" />
                            </SkeletonTheme>
                        </div>
                    )
                })
                }
            </div>
        );
    }
    return (
        <div className={`flex flex-col h-screen p-4 ${isDarkMode ? "bg-gradient-to-r from-darkBackground to-lightBackground" : "bg-gradient-to-r from-slate-900 to-indigo-500"}`}
        >
            <Link to="/" className={`bg-indigo-500 hover:bg-slate-300 w-[200px] text-center rounded-md p-2 m-3 text-lightText ${isDarkMode ? "bg-lightBackground" : "bg-indigo-500"}`}>
                Back to Home
            </Link>
            <div className={`flex flex-col items-center justify-center mt-[100px]`}>
                <div className={`p-6 max-w-2xl rounded-lg shadow-lg text-center bg-white transition-opacity duration-500`}>
                    <h1 className="text-3xl font-bold">{quote.quote}</h1>
                    <h3 className="mt-2 text-gray-600 text-xl">{quote.author}</h3>
                </div>
            </div>
        </div>




    )
}