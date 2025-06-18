import { useEffect, useContext, useState } from "react";
import "./App.css";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";
import { PostContext } from "./context/posts";
import { DarkModeContext } from "./context/darkModeTheme";
import Sidebar from "./components/Sidebar";
import { Header } from "./components/Header";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { fetchPosts } = useContext(PostContext);
  const [term, setTerm] = useState("");
  const handleSubmit = (term) => setTerm(term);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen w-full
    ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="box-border shadow-md sticky top-0 z-10">
        <Header term={term} onSubmit={handleSubmit} setTerm={setTerm} />
        <PostCreate />
      </div>
      <div className="relative grid grid-cols-6 m-2 min-w-full">
        <div className="col-span-4 xl:col-span-5 md:col-span-4">
          <PostList term={term} />
        </div>
        <div
          className="col-span-2 md:col-span-2 xl:col-span-1 fixed right-1 sm:right-3 md:right-10 lg:right-20 xl:right-1 2xl:right-10 text-[10px] md:text-[15px] lg:text-[18px] 2xl:text-[20px]"
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
