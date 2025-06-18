import { useContext } from "react";
import { PostContext } from "../context/posts";
import PostShow from "./PostShow";
import "react-loading-skeleton/dist/skeleton.css";
import { Loader } from "./Loader";

export default function PostList(props) {
  const { posts, isLoading } = useContext(PostContext);
  const { term } = props;

  const filterPosts = posts.filter((post) => {
    return (
      post.quote.toLowerCase().includes(term.toLowerCase()) ||
      post.author.toLowerCase().includes(term.toLowerCase())
    );
  });

  const renderPosts = filterPosts.map((post) => {
    return <PostShow key={post.id} post={post} />;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-[13px] px-2">
      {isLoading ? <Loader /> : renderPosts}
    </div>
  );
}
