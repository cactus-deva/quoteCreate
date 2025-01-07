import { createContext, useState } from "react";
import axios from "axios";

export const PostContext = createContext();

export function Provider({ children }) {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    setPosts(response.data)
    
  }

  const createPost = async (author, quote) => {
    const response = await axios.post("http://localhost:3001/posts",
      { author, quote }
    )
    const updatePosts = [
      ...posts, response.data
    ]
    setPosts(updatePosts)
  }

  const deletePostbyId = async (id) => {
    await axios.delete(`http://localhost:3001/posts/${id}`)

    const updatedPosts = posts.filter((post) => {
      return post.id !== id;
    })
    setPosts(updatedPosts)
  }

  const editPostbyId = async (id, newAuthor, newQuote) => {
    const response = await axios.put(`http://localhost:3001/posts/${id}`, {
      author: newAuthor,
      quote: newQuote
    })

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
        deletePostbyId,
        editPostbyId,
        createPost,
        fetchPosts
      }
    }>
      {children}
    </PostContext.Provider>
  )
}