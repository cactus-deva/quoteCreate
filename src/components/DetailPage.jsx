import { useContext, useEffect, useState } from "react"
import { PostContext } from "../context/posts"
import { useParams, Link } from "react-router-dom"
import { DarkModeContext } from "../context/darkModeTheme"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

export default function DetailPage() {
    const { posts, fetchPosts, isLoading } = useContext(PostContext)
    const { isDarkMode, randomBackgroundColor } = useContext(DarkModeContext)
    const { id } = useParams()
    const [backgroundColor, setBackgroundColor] = useState("")

    const post = posts.find((p) => p.id === parseInt(id))    

    useEffect(() => {
        fetchPosts()
        setBackgroundColor(randomBackgroundColor())
    }, [])

    if (isLoading) {
           return (
               <div className="grid grid-cols-1">
                   {[...Array(3)].map((_, index) => {
                       return (
                       <div key={index} className="flex justify-center items-center h-full w-full py-[20px] rounded-md">
                           <SkeletonTheme baseColor="lightblue" highlightColor="turquoise">
                              <Skeleton count={6} height={30} containerClassName="flex-1" /> 
                           </SkeletonTheme>
                       </div>
                   )})
                   }
               </div>
           );
       }
    
    const showPostPage =
        post ?
            <div className="flex flex-col items-center left-1 h-[100vh] p-[100px] text-center"
                style={{ backgroundColor: isDarkMode ? "black" : backgroundColor }}>
                <Link to="/" className="absolute top-2 left-2 bg-transparent hover:bg-white w-[200px] hover:text-black p-1 rounded-md border-2 text-white">
                Back to Home
                </Link>
                <div className={`abosolute rounded-3xl m-40 p-6 bg-white bg-opacity-30 min-h-[200px] w-auto text-[40px] text-black`}>
                    <h1>{post.quote}</h1>
                    <h1>----{post.author !== "" ? post.author : "Unknown"}----</h1>
                </div>
            </div>
            :
            <div className="font-show flex flex-col items-center justify-center h-[100vh] text-[70px] bg-cover">
                <h1>Post not found</h1>
            </div>


    return (
        <div className={`box-border flex flex-col h-[100vh]`}>
            {showPostPage}
        </div>
    )
}