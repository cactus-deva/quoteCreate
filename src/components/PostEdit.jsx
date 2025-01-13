import { useState, useContext } from "react"
import { PostContext } from "../context/posts"

export default function PostEdit({ post, onSubmit }) {

    const { editPostbyId } = useContext(PostContext)
    const [author, setAuthor] = useState(post.author)
    const [quote, setQuote] = useState(post.quote)

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleChangeQuote = (e) => {
        setQuote(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        editPostbyId(post.id, author, quote)
    }
    
    return (
        <div className="flex flex-col justify-between h-[100px] rounded-md pl-1 text-[black] text-[15px]">
            <form onSubmit={handleSubmit}>
                <div className="flex items-start m-1 h-[50px]">
                    <label>Quotes</label>
                    <textarea type="text" maxLength="50" value={quote} onChange={handleChangeQuote} className="ml-2 pl-1 h-[50px] w-[400px] rounded-md" />
                </div>
                <div className="flex m-1">
                    <label>Author</label>
                    <input type="text" maxLength="20" value={author} onChange={handleChangeAuthor} className="ml-2 pl-1 w-[400px] rounded-md" />
                </div>
                <button className="flex justify-center items-center bg-white hover:bg-indigo-400 w-[100px] h-[30px] rounded-md mt-3">
                    Save
                </button>
            </form>
        </div>

    )
}