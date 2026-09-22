import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}
