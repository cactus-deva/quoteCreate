import { createContext, useState } from "react";
import axios from "axios";

export const PostContext = createContext();

export function Provider({ children }) {
  const [posts, setPosts] = useState([])  //posts ==> [{author:"", quote:"", id:""}, {}, {}]
  const [isLoading, setIsLoading] = useState(true)
  const URL = "http://localhost:3001/posts"

  const fetchPosts = async () => {
    const response = await axios.get(URL);
    setTimeout(() => {
      setPosts(response.data)
      setIsLoading(false)
    }, 1000);
  }

  const createPost = async (author, quote) => {
    const response = await axios.post(URL,
      { author, quote }
    )
    
    //response.data ==> {author: "", quote: "", id: ""}
    const updatePosts = [
      ...posts, response.data
    ]
    setPosts(updatePosts)
  }

  const deletePostbyId = async (id) => {
    await axios.delete(`${URL}/${id}`)

    const updatedPosts = posts.filter((post) => {
      return post.id !== id;
    })
    setPosts(updatedPosts)
  }

  const editPostbyId = async (id, newAuthor, newQuote) => {
    const response = await axios.put(`${URL}/${id}`, {
      author: newAuthor,
      quote: newQuote
    })
    //response.data ==> {author: "", quote: "", id: ""}

    const updatePosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, ...response.data }
      } else {
        return post;
      }
    })
    setPosts(updatePosts)
  }

  return (
    <PostContext.Provider value={
      {
        posts,
        setPosts,
        deletePostbyId,
        editPostbyId,
        createPost,
        fetchPosts,
        isLoading
      }
    }>
      {children}
    </PostContext.Provider>
  )
}