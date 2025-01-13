import { useEffect, useContext, useState } from 'react'
import './App.css'
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import { PostContext } from './context/posts';
import { DarkModeContext } from './context/darkModeTheme';
import Sidebar from './components/Sidebar';
import SearchQuote from './components/SearchQuote';
import { render } from 'react-dom';


function App() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)
  const { fetchPosts } = useContext(PostContext)
  const [term, setTerm] = useState("")
  const handleSubmit = (term) => setTerm(term)
  

  useEffect(() => {
    fetchPosts()

  }, [])

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "bg-darkBackground text-lightText" : "bg-indigo-200 text-lightText"}`}>
      <div className='box-border shadow-md sticky top-0 z-10'>
        <div className={`flex justify-between font-bold p-1 ${isDarkMode ? "bg-gradient-to-r from-darkBackground to-lightBackground" : "bg-gradient-to-r from-slate-900 to-indigo-500"}`}>
          <h1 className='text-2xl text-white font-bold'>Quote of the Day</h1>
          <div className={`flex items-center justify-center`}>
            <SearchQuote onSubmit={handleSubmit} term={term} setTerm={setTerm} />
            <button className={`px-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600 
            ${isDarkMode ? "bg-darkBackground text-darkText" : "bg-lightBackground text-lightText"}`}
              onClick={toggleDarkMode}>
              <svg className='w-3 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.053 15.806a10 10 0 01-8.8-15.71A10.003 10.003 0 002 12a10 10 0 0019.053 3.806z" />
              </svg>
            </button>
          </div>
        </div>
        <PostCreate />
      </div>
      <div className='grid grid-cols-6 m-2'>
        <div className='col-span-5'>
          <PostList term={term} />
        </div>
        <div className='col-span-1'>
          <Sidebar />
        </div>
      </div>
    </div>


  )
}

export default App
