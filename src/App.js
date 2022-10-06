import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import About from './components/About'
import Books from './components/Books'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Main from './Main/Main'

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>, 
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:'home',
          element: <Home></Home>
        },
        {
          path:'books',
          element: <Books></Books>
        },
        {
          path:'about',
          element: <About></About>
        }
      ]
    }
    
  ])
 return(
  <div>
    
<RouterProvider router={router}></RouterProvider>
  </div>

 ) }

export default App
