import { useState, useContext, useRef } from "react"
import { PostContext } from "../context/posts"
import { DarkModeContext } from "../context/darkModeTheme"

export default function PostCreate() {
    const quoteMaxLength = 50
    const { createPost } = useContext(PostContext)
    const { isDarkMode } = useContext(DarkModeContext)

    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleChangeQuote = (e) => {
        setQuote(e.target.value)
        //if type letters e.nativeEvent.data will be string, but backspace will be null 
        if (e.nativeEvent.data) {
            quoteMaxLength - quote.length
        } else {
            quoteMaxLength + quote.length
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(author, quote)
        setAuthor("")
        setQuote("")
    }

    return (
        <div className={`flex flex-col items-center justify-around w-full h-[160px] md:h-[200px] lg:h-[260px] xl:h-[240px] p-2 text-white 
        ${isDarkMode ? "bg-gradient-to-r from-black to-white" : "bg-gradient-to-r from-slate-900 to-indigo-500"}`}
        >
            <h1 className="font-bold mb-1 text-[10px] md:text-[15px] lg:text-[16px]">Create Your Quote</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-1 px-10 text-[10px] md:text-[15px] lg:text-[16px]">
                <div className="flex mb-2">
                    <div className="flex flex-col items-start">
                        <label className="mr-2">Quotes</label>
                        <span className="text-[8px] md:text-[10px] lg:text-[12px] xl:text-[15px]">
                            {quoteMaxLength - quote.length} / {quoteMaxLength}
                        </span>
                    </div>
                    <textarea
                        maxLength={quoteMaxLength}
                        placeholder={`Type Maximum ${quoteMaxLength} letters`}
                        value={quote}
                        onChange={handleChangeQuote}
                        required
                        className="rounded-md h-[50px] md:h-[60px] lg:h-[100px] xl:h-[80px] w-[200px] md:w-[400px] lg:w-[500px] xl:w-[500px] 2xl:w-[600px] p-1 text-black resize-none"
                    />
                </div>
                <div className="flex mb-2">
                    <div className="flex flex-col">
                        <label className="mr-2">Author</label>
                    </div>
                    <textarea maxLength="15" placeholder="Your name" value={author} onChange={handleChangeAuthor}
                        className=" rounded-md overflow-hidden h-[21px] md:h-[28px] lg:h-[30px] w-[200px] md:w-[400px] lg:w-[500px] xl:w-[500px] 2xl:w-[600px] p-1 text-black resize-none"
                    />
                    
                </div>
                <div className="flex justify-center pl-8 h-[21px] md:h-[28px] lg:h-[30px] w-[200px] md:w-[400px] lg:w-[500px] xl:w-[500px] 2xl:w-[600px]">
                    <button className="bg-[white] w-[100px] h-[24px] lg:h-[30px] rounded-lg hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black">
                        Submit
                    </button>
                </div>

            </form>
        </div>

    )
}