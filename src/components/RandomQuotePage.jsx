import React, { useState, useEffect, useContext } from "react";
import RandomQuoteApi from "../api/api";
import { Link } from "react-router-dom";
import { DarkModeContext } from './../context/darkModeTheme';

export default function RandomQuotePage() {
    const { isDarkMode } = useContext(DarkModeContext)
    const [quote, setQuote] = useState([])

    const fetchData = async () => {
        try {
            const res = await RandomQuoteApi()
            setQuote(res)
        } catch (error) {
            console.log("Data not found >> ", error);
        }
    }
    
    
    useEffect(() => {
        fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 4000);

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={`p-4 h-full ${isDarkMode ? "bg-gradient-to-r from-darkBackground to-lightBackground" : "bg-gradient-to-r from-slate-900 to-indigo-500"}`}>
            <Link to="/" className={`bg-indigo-500 hover:bg-slate-600 rounded-md p-2 m-3 text-lightText ${isDarkMode ? "bg-lightBackground" : "bg-indigo-500"}`}>Back to Home</Link>
            <div className={`flex flex-col items-center justify-center h-screen `}>

                <div className={`p-6 max-w-2xl rounded-lg shadow-lg text-center bg-white transition-opacity duration-500`}>
                    <h1 className="text-3xl font-bold">{quote.quote}</h1>
                    <h3 className="mt-2 text-gray-600 text-xl">{quote.author}</h3>
                </div>
            </div>
        </div>




    )
}