import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/posts";
import { useParams, Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeTheme";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function DetailPage() {
  const { posts, fetchPosts, isLoading } = useContext(PostContext);
  const { isDarkMode } = useContext(DarkModeContext);
  const { id } = useParams();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPosts();
    const randomSeed = Math.floor(Math.random() * 1000);
    const url = `https://picsum.photos/seed/${randomSeed}/800/600`;
    setBackgroundImage(url);
  }, []);

  useEffect(() => {
    const findPostbyID = posts.find((p) => p.id === id);
    setPost(findPostbyID);
  }, [posts]);

  if (isLoading || !post) {
    return (
      <div className="flex flex-col items-center justify-center">
        {[...Array(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center h-full w-full py-[20px] rounded-md mt-[10%] p-[40px]"
            >
              <SkeletonTheme baseColor="lightblue" highlightColor="turquoise">
                <Skeleton
                  count={10}
                  circle={30}
                  height={30}
                  containerClassName="flex-1"
                />
              </SkeletonTheme>
            </div>
          );
        })}
      </div>
    );
  }

  const ShowPostPage = () =>
    !isLoading ? (
      <div
        className={`h-auto w-full rounded-3xl bg-white bg-opacity-30 m-[20%] sm:m-[25%] md:m-[15%] xl:m-[5%] p-10 lg:p-20 text-[15px] md:text-[35px] lg:text-[40px] text-white`}
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
        className="flex flex-col items-center relative h-full p-[10%] text-center text-[10px] md:text-[20px] text-white"
        style={isDarkMode ? {backgroundColor: "gray"} : {backgroundImage: `url("${backgroundImage}")`, backgroundSize: 'cover'}}
      >
        <Link
          to="/"
          className="absolute top-2 left-2 bg-transparent rounded-md border-2 hover:bg-white w-[120px] md:w-[250px] h-[40px] sm:h-[30px] md:h-[50px] pt-2 m-2 hover:text-black"
        >
          Back to Home
        </Link>
        <ShowPostPage />
      </div>
    </div>
  );
}
