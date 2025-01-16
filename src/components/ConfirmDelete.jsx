import { useContext } from "react"
import { DarkModeContext } from "../context/darkModeTheme"
import { PostContext } from "../context/posts"

export default function ConfirmDelete(props) {
    const { setIsOpen, post } = props
    const { isDarkMode } = useContext(DarkModeContext)
    const { deletePostbyId } = useContext(PostContext)

    const handleDeleteConfirm = () => {
        deletePostbyId(post.id)
    }

    return (
        <div className={`flex justify-center items-center m-3 rounded-md h-[160px] text-[13px] md:text-[17px] xl:text-[19px]
        ${isDarkMode ? "bg-slate-600 text-black" : "bg-indigo-400 text-black"}`}>
            <div className="flex flex-col text-center justify-around h-[80px]">
                <h1>Confirm delete?</h1>
                <div className="flex justify-around">
                    <button className="bg-[green] hover:bg-white rounded-md p-1 w-16 md:w-20" onClick={handleDeleteConfirm}>Yes</button>
                    <button className="bg-[red] hover:bg-white rounded-md p-1 w-16 md:w-20" onClick={() => setIsOpen(false)}>No</button>
                </div>
            </div>
        </div>

    )
}