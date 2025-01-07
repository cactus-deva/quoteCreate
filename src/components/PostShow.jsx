import PostEdit from './PostEdit';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/posts';
import { DarkModeContext } from '../context/darkModeTheme';

export default function PostShow(props) {
    const { post } = props
    const { deletePostbyId } = useContext(PostContext)
    const {isDarkMode} = useContext(DarkModeContext)

    const background = `https://picsum.photos/1000/500?blur&random=${post.id}`
    const [postEdit, setPostEdit] = useState(false)

    const handleDeleteClick = () => {
        deletePostbyId(post.id);
    }

    const handleEditClick = () => {
        setPostEdit(!postEdit)
    }

    const handleSubmit = () => {
        setPostEdit(false)
    }

    let content =
        <Link to={`DetailPage/${post.id}`} >
            <div className='flex flex-col items-center font-show text-black text-center overflow-hidden'>
                <div className={`rounded-2xl p-1 ${isDarkMode ? "bg-darkBackground bg-opacity-30 text-darkText" : "bg-indigo-500 bg-opacity-30 text-lightText"}`}>
                    <div className='text-[25px]'>{post.quote}</div>
                    <div className='text-[15px] font-semibold'>----{post.author !== "" ? post.author : "Unknown"}----</div>
                </div>
            </div>

        </Link>

    if (postEdit) {
        content = <PostEdit post={post} onSubmit={handleSubmit} />
    }

    return (
        <div style={{ backgroundImage: `url(${background})` }}
            className="flex flex-col justify-between h-[160px] m-3 rounded-md p-2 text-white text-[20px] bg-cover"
        >
            {content}
            <div className="flex justify-end items-start">
                <button id="edit" onClick={handleEditClick}>
                    <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                        className="w-6 h-6 m-1" />
                </button>
                <button id="delete" onClick={handleDeleteClick}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png"
                        className="w-7 h-7 m-1" />
                </button>
            </div>
        </div>


    )
}