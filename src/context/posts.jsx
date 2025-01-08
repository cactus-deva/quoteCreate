import { createContext, useState } from "react";
import axios from "axios";

export const PostContext = createContext();

export function Provider({ children }) {
  const [posts, setPosts] = useState([])
  const URL = "http://localhost:3002/posts"

  const fetchPosts = async () => {
    const response = await axios.get(URL);
    setPosts(response.data)
  }

  const createPost = async (author, quote) => {
    const response = await axios.post(URL,
      { author, quote }
    )
    const updatePosts = [
      ...posts, response.data
    ]
    setPosts(updatePosts)
  }

  const deletePostbyId = async (id) => {
    await axios.delete(`URL/${id}`)

    const updatedPosts = posts.filter((post) => {
      return post.id !== id;
    })
    setPosts(updatedPosts)
  }

  const editPostbyId = async (id, newAuthor, newQuote) => {
    const response = await axios.put(`URL/${id}`, {
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