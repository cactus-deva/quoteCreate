import { useContext, useEffect } from "react"
import { PostContext } from "../context/posts"
import { useParams, Link } from "react-router-dom"
import { DarkModeContext } from "../context/darkModeTheme"

export default function DetailPage() {
    const { posts, fetchPosts } = useContext(PostContext)
    const {isDarkMode} = useContext(DarkModeContext)
    const { id } = useParams()

    const post = posts.find((p) => p.id === parseInt(id))

    useEffect(() => {
        fetchPosts()
    }, [])

    const showPostPage =
        post ?
            <div className="font-show flex flex-col items-center justify-center h-[100vh] p-[100px] text-center text-[70px] bg-cover">
                <div className={`rounded-3xl p-6 ${isDarkMode ? "bg-darkBackground bg-opacity-70 text-darkText" : "bg-indigo-500 bg-opacity-70 text-lightText"}`}>
                    <h1>{post.quote}</h1>
                    <h1>----{post.author !== "" ? post.author : "Anonymous"}----</h1>
                </div>
            </div>
            :
            <div className="font-show flex flex-col items-center justify-center h-[100vh] text-[70px] bg-cover">
                <h1>Post not found</h1>
            </div>


    return (
        <div className={`box-border flex flex-col h-[100vh] ${isDarkMode ? "text-darkText text-[20px] bg-gray-700":"text-white text-[20px] bg-indigo-800"}`}>
            <Link to="/" className="m-3">
                <button className="bg-transparent hover:bg-darkBackground p-1 rounded-md border-2">Back to Home</button>
            </Link>
            {showPostPage}
        </div>
    )
}