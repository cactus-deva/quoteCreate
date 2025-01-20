import { useState, useContext } from "react"
import { PostContext } from "../context/posts"

export default function PostEdit({ post, onSubmit }) {
    const quoteMaxLength = 50
    const [quote, setQuote] = useState(post.quote)
    const { editPostbyId } = useContext(PostContext)
    const [author, setAuthor] = useState(post.author)


    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleChangeQuote = (e) => {
        setQuote(e.target.value)
        if (e.nativeEvent.data) {
            quote.length + 1
        } else {
            quote.length - 1
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        editPostbyId(post.id, author, quote)
    }

    return (
        <div className="flex flex-col justify-between h-full w-full rounded-md text-[black] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[19px]">
            <form onSubmit={handleSubmit}>
                <div className="flex gap-1 mb-1">
                    <div className="flex flex-col items-center">
                        <label>Quotes</label>
                        <span className="text-[8px] md:text-[10px] lg:text-[12px] xl:text-[15px]">
                            {quoteMaxLength - quote.length} / {quoteMaxLength}
                        </span>
                    </div>
                    <textarea type="text" maxLength={quoteMaxLength} value={quote} onChange={handleChangeQuote} required
                        className="h-[50px] md:h-[70px] w-[100%] overflow-hidden box-border rounded-md pl-1 resize-none" />
                </div>
                <div className="flex gap-1 mb-1">
                    <label>Author</label>
                    <textarea type="text" maxLength="15" value={author} onChange={handleChangeAuthor}
                        className="h-8 w-[100%] overflow-hidden box-border rounded-md pl-1 resize-none" />
                </div>
                <button className="bg-white hover:bg-indigo-400 w-[70px] md:w-[90px] h-[20px] md:h-[25px] lg:h-[30px] rounded-md mt-2 md:mt-3 lg:mt-4">
                    Save
                </button>
            </form>
        </div>

    )
}

