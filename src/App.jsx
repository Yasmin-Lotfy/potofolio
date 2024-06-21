import React from "react";

import "./App.css";

import Layout from "./Components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Notfound from "./Components/NotFound/Notfound";

function App() {
  let routes = createBrowserRouter([{
    path:"", element:<Layout/>, children:[
      {index:true, element:<Home/>},
      {path:"/index.html", element:<Home/>},
      {path:"about", element:<About/>},
      {path:"contact", element:<Contact/>},
      {path:"projects", element:<Projects/>},

      {path:"*", element:<Notfound/>},
    ]
  }])
  return (
    <>
  <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
