import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/posts";
import { useParams, Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeTheme";
import { Loader } from "./Loader";
import landscape from "../assets/landscape.png"

export default function DetailPage() {
  const { posts, fetchPosts, isLoading } = useContext(PostContext);
  const { isDarkMode } = useContext(DarkModeContext);
  const { id } = useParams();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [post, setPost] = useState(null);
  const [backgroundLoading, setBackgroundLoading] = useState(true)

  useEffect(() => {
    fetchPosts();
    const random = Math.floor(Math.random() * 1000);
    const url = `https://picsum.photos/800/900?random=${random}&grayscale`;
    const img = new window.Image();
    img.src = url;

    img.onload = () => {
      setBackgroundImage(url);
      setBackgroundLoading(false)
    }
    img.onerror = () => {
      setBackgroundImage(landscape)
      setBackgroundLoading(false)
    }
  }, []);

  useEffect(() => {
    const findPostbyID = posts.find((p) => p.id === id);
    setPost(findPostbyID);
  }, [posts]);

  const ShowPostPage = () =>
    !isLoading ? (
      <div
        className={`h-auto w-full rounded-3xl bg-white bg-opacity-30 m-[20%] sm:m-[25%] md:m-[15%] xl:m-[5%] p-10 lg:p-20 text-[15px] md:text-[35px] lg:text-[40px] text-black`}
      >
        <h1 className="break-words">{post.quote}</h1>
        <h1 className="font-bold">
          --{post.author !== "" ? post.author : "Unknown"}--
        </h1>
      </div>
    ) : (
      <div
        className={`h-auto w-full rounded-3xl bg-white bg-opacity-30 m-[20%] sm:m-[25%] md:m-[15%] xl:m-[5%] p-10 lg:p-20 text-[15px] md:text-[35px] lg:text-[40px] text-white`}
      >
        <h1>Post not found</h1>
      </div>
    );

  return (
    <div className={`box-border flex flex-col h-[100vh] overflow-hidden`}>
      <div
        className="flex flex-col items-center relative h-full p-[10%] text-center text-[10px] md:text-[20px] text-black"
        style={isDarkMode ? {backgroundColor: "gray"} : {backgroundImage: `url("${backgroundImage}")`, backgroundSize: 'cover'}}
      >
        <Link
          to="/"
          className="absolute top-2 left-2 bg-transparent rounded-md border-2 hover:bg-white w-[120px] md:w-[250px] h-[40px] sm:h-[30px] md:h-[50px] pt-2 m-2 hover:text-black"
        >
          BACK
        </Link>
        {
          isLoading || !post || backgroundLoading ?
          <Loader /> : <ShowPostPage />
        }
      </div>
    </div>
  );
}
