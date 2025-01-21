import { useEffect, useContext, useState } from 'react'
import './App.css'
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import { PostContext } from './context/posts';
import { DarkModeContext } from './context/darkModeTheme';
import Sidebar from './components/Sidebar';
import SearchQuote from './components/SearchQuote';


function App() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)
  const { fetchPosts } = useContext(PostContext)
  const [term, setTerm] = useState("")
  const handleSubmit = (term) => setTerm(term)

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className={`flex flex-col min-h-screen w-full
    ${isDarkMode ? "bg-black text-white" : "bg-indigo-200 text-black"}`}
    >
      <div className='box-border shadow-md sticky top-0 z-10'>
        <div className={`flex justify-between font-bold p-1 
          ${isDarkMode ? "bg-gradient-to-r from-black to-white" : "bg-gradient-to-r from-slate-900 to-indigo-500"}`}
        >
          <h1 className='flex items-center text-white font-bold text-[12px] md:text-[20px] ml-3'>
            Quote of the Day
          </h1>
          <div className={`flex items-center justify-center`}>
            <SearchQuote onSubmit={handleSubmit} term={term} setTerm={setTerm} />
            <button className={`rounded-[50%] hover:bg-blue-300 px-3 py-2 m-2
            ${isDarkMode ? "bg-indigo-800 text-white" : " bg-white text-black"}`}
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
        <div className='col-span-4 xl:col-span-5 md:col-span-4'>
          <PostList term={term} />
        </div>
        <div className='col-span-2 md:col-span-2 xl:col-span-1 fixed right-4 sm:right-16 md:right-16 lg:right-24 xl:right-1 2xl:right-10 text-[10px] md:text-[15px] lg:text-[18px] 2xl:text-[20px]'>
          <Sidebar />
        </div>
      </div>
    </div>


  )
}

export default App
