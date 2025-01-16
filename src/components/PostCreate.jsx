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

        <div className={`flex flex-col items-center justify-around h-[160px] md:h-[200px] lg:h-[260px] xl:h-[240px] p-2 text-white 
        ${isDarkMode ? "bg-gradient-to-r from-black to-white" : "bg-gradient-to-r from-slate-900 to-indigo-500"}`}
        >
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-1 text-[10px] md:text-[15px] lg:text-[16px]">
                <h1 className="font-bold mb-1">Create Your Quote</h1>

                <div className="flex items-start mb-2">
                    <label className="mr-2">Quotes</label>
                    <textarea type="text" maxLength="50" placeholder="Type maximum 50 letters"
                        className="text-black rounded-md h-[50px] md:h-[60px] lg:h-[100px] xl:h-[80px] w-[70%] md:w-[400px] lg:w-[500px] xl:w-[500px] 2xl:w-[600px] p-1" 
                        value={quote} onChange={handleChangeQuote} required />
                </div>
                <div className="flex items-start mb-2">
                    <label className="mr-2">Author</label>
                    <textarea type="text" maxLength="15" placeholder="Your name" rows="1"
                        className=" text-black rounded-md resize-none overflow-hidden h-[21px] md:h-[28px] lg:h-[30px] w-[70%] md:w-[400px] lg:w-[500px] xl:w-[500px] 2xl:w-[600px] p-1" 
                        value={author} onChange={handleChangeAuthor} />
                </div>
                <div className="flex justify-center">
                    <button className="bg-[white] w-[100px] h-[24px] lg:h-[30px] rounded-lg hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black">
                        Submit
                    </button>
                </div>

            </form>
        </div>

    )
}