import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
export default function Layout() {
  return (
    <>
     <Navbar/>
  
      <Outlet/>
    </>
  )
}
