import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Books from './components/Books'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'home',
      element: <Home></Home>
    }
    ,
    {
      path:'books',
      element: <Books></Books>
    }
    ,
    {
      path:'about',
      element: <About></About>
    }
  ])
 return(
  <div>
    
<Header></Header>
<RouterProvider router={router}></RouterProvider>
  </div>

 ) }

export default App
