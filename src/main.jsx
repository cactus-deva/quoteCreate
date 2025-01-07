import { createRoot, ReactDOM } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import DetailPage from './components/DetailPage'
import { Provider } from './context/posts'
import RandomQuotePage from './components/RandomQuotePage'
import { DarkModeProvider } from './context/darkModeTheme'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/DetailPage/:id",
    element: <DetailPage />
  },
  {
    path: "/RandomQuotePage",
    element: <RandomQuotePage />
  }

]);

createRoot(document.getElementById('root')).render(
  <>
    <Provider>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </Provider>
  </>

)
