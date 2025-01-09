import PostEdit from './PostEdit';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/darkModeTheme';
import ConfirmDelete from './ConfirmDelete';

export default function PostShow(props) {
    const { post } = props

    const { isDarkMode } = useContext(DarkModeContext)
    const [isOpen, setIsOpen] = useState(false) //toggle confirm delete page
    const [postEdit, setPostEdit] = useState(false)

    const handleDeleteClick = () => setIsOpen(!isOpen)
    const handleEditClick = () => setPostEdit(!postEdit)
    const handleSubmit = () => setPostEdit(false)    

    let content =
        <Link to={`DetailPage/${post.id}`} >
            <div className='flex flex-col items-center font-show text-black text-center overflow-hidden'>
                <div className={`rounded-2xl p-1 ${isDarkMode ? "bg-white bg-opacity-30 text-darkText" : "bg-indigo-300 bg-opacity-30 text-lightText"}`}>
                    <div className='text-[25px]'>{post.quote}</div>
                    <div className='text-[15px] font-semibold'>----{post.author !== "" ? post.author : "Unknown"}----</div>
                </div>
            </div>
        </Link>

    if (postEdit) {
        content = <PostEdit post={post} onSubmit={handleSubmit} />
    }

    if (isOpen) {
        return <ConfirmDelete isOpen={isOpen} setIsOpen={setIsOpen} post={post} />
    }
  
    return (
        <div>
            <div className={`flex flex-col justify-between h-[160px] m-3 rounded-md p-2 ${isDarkMode ? "text-darkText text-[20px] bg-gray-700":"text-white text-[20px] bg-indigo-800"}`}
            >
                {content}

                <div className="flex justify-end items-baseline">
                    <button id="edit" onClick={handleEditClick}>
                        <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                            className="w-6 h-6 m-1" alt='edit' />
                    </button>
                    <button to="/DeletePopup" id="delete" onClick={handleDeleteClick}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png"
                            className="w-7 h-7 m-1" alt='delete' />
                    </button>
                </div>
            </div>

        </div>



    )
}