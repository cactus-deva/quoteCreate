import PostEdit from "./PostEdit";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeTheme";
import ConfirmDelete from "./ConfirmDelete";
import landscape from '../assets/landscape.png'

export default function PostShow(props) {
  const { post } = props;

  const { isDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [postEdit, setPostEdit] = useState(false);

  const handleDeleteClick = () => setIsOpen(!isOpen);
  const handleEditClick = () => setPostEdit(!postEdit);
  const handleSubmit = () => setPostEdit(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
  const random = Math.floor(Math.random() * 100000);
  const url = `https://picsum.photos/300/200?random=${random}`;
  const img = new window.Image();
  img.src = url;
  img.onload = () => {
    setImageUrl(url);
    setImgLoading(false);
  };
  img.onerror = () => {
    setImageUrl(landscape);
    setImgLoading(false);
  };
}, []);

  let Content = () => (
    <Link to={`DetailPage/${post.id}`}>
      <div className="flex flex-col flex-wrap items-center overflow-hidden text-black text-center">
        <div
          className={`flex flex-col justify-around w-full bg-white bg-opacity-50 rounded-2xl h-[100px] md:h-[140px] lg:h-[170px] xl:h-[150px] p-1`}
        >
          {post.quote.includes(" ") ? (
            <div className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[25px] 2xl:text-[23px] break-words leading-tight">
              {post.quote}
            </div>
          ) : (
            <div className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[25px] 2xl:text-[23px] break-all">
              {post.quote}
            </div>
          )}
          <div className="text-[15px] md:text-[18px] lg:text-[21px] xl:text-[22px] font-semibold break-words">
            --{post.author !== "" ? post.author : "Unknown"}--
          </div>
        </div>
      </div>
    </Link>
  );

  if (postEdit) {
    Content = () => <PostEdit post={post} onSubmit={handleSubmit} />;
  }

  if (isOpen) {
    return <ConfirmDelete setIsOpen={setIsOpen} post={post} />;
  }

  return (
    <div>
      {!imgLoading && (
        <div
          className={`flex flex-col justify-around w-full h-full rounded-2xl hover:border-4 border-yellow-400 p-3 md:h-[100%] lg:h-[230px] xl:h-[230px] text-black `}
          style={
            isDarkMode
              ? { backgroundColor: "gray" }
              : {
                  backgroundImage: `url("${imageUrl}")`,
                  backgroundSize: "cover",
                }
          }
        >
          <Content />
          <div className="flex justify-end items-baseline">
            <button id="edit" onClick={handleEditClick}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                className="w-4 md:w-6 lg:w-7 xl:w-8 h-4 md:h-6 lg:h-7 xl:h-8 m-1"
                alt="edit"
              />
            </button>
            <button to="/DeletePopup" id="delete" onClick={handleDeleteClick}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png"
                className="w-4 md:w-6 lg:w-7 xl:w-8 h-4 md:h-6 lg:h-7 xl:h-8 m-1"
                alt="delete"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
