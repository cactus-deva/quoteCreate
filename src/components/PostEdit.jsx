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
        <div className="flex flex-col justify-between h-full w-full rounded-md pl-1 text-[black] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[19px]">
            <form onSubmit={handleSubmit}>
                <div className="flex gap-1 mb-1">
                    <label>Quotes</label>
                    <textarea type="text" maxLength="50" value={quote} onChange={handleChangeQuote} className="h-[50px] md:h-[70px] w-[100%] rounded-md ml-2 pl-1 " />
                </div>
                <div className="flex gap-1 mb-1">
                    <label>Author</label>
                    <input type="text" maxLength="15" value={author} onChange={handleChangeAuthor} className="w-[100%] h-8 rounded-md ml-2 pl-1" />
                </div>
                <button className="bg-white hover:bg-indigo-400 w-[70px] md:w-[90px] h-[20px] md:h-[25px] lg:h-[30px] rounded-md mt-2 md:mt-3 lg:mt-4">
                    Save
                </button>
            </form>
        </div>

    )
}

