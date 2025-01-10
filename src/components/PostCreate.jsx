import { useState, useContext } from "react"
import { PostContext } from "../context/posts"
import { DarkModeContext } from "../context/darkModeTheme"

export default function PostCreate() {
    const { createPost } = useContext(PostContext)
    const { isDarkMode } = useContext(DarkModeContext)

    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleChangeQuote = (e) => {
        setQuote(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(author, quote)
        setAuthor("")
        setQuote("")
    }
    return (
        <div className={`flex flex-col h-[200px] p-2 text-white items-center justify-around ${isDarkMode ? "bg-gradient-to-r from-darkBackground to-lightBackground" : "bg-gradient-to-r from-slate-900 to-indigo-500"}`}>
            <h1 className="font-bold">Create Your Quote</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex items-start mb-2">
                    <label className="mr-2">Quotes</label>
                    <textarea type="text" maxLength="50" placeholder="Type maximum 50 letters" className="text-black p-2 rounded-md h-[70px] lg:w-[400px] sm:w-[300px]" value={quote} onChange={handleChangeQuote} required />
                </div>
                <div className="flex items-start mb-2">
                    <label className="mr-2">Author</label>
                    <input type="text" maxLength="20" placeholder="Your name" className=" text-black p-2 rounded-md h-[30px] lg:w-[400px] sm:w-[300px]" value={author} onChange={handleChangeAuthor} />
                </div>
                <div className="flex justify-center ml-[60px]">
                     <button className="bg-[white] text-slate-700 w-[100px] h-[24px] rounded-lg hover:bg-gradient-to-r from-violet-500 to-fuchsia-500">Submit</button>
                </div>
               
            </form>
        </div>

    )
}