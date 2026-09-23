import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Components/Layout'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import MyComponent from './MyComponent'
import BlogFirst from './BlogFirst'


export default function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "blog",
          element: <BlogFirst />,
          children: [
            { index: true, element: <Blog /> } 
            ,
            { path: ":slug", element: <MyComponent /> }
          ]
        },
        { path: "about", element: <About /> }
      ]
    },
    
  ] )

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}