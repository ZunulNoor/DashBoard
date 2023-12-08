import React, { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import SideBar from './Component/SideBar'
import Home from './Component/Home'
import { Route, Routes } from "react-router-dom";
import Order from './Component/Order'

export default function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/category' element={<Category />} /> */}
        <Route path='/orders' element={<Order />} />
        {/* <Route path='/' element={<HomePage />} /> */}
      </Routes>
      {/* <Home /> */}
    </div>
  )
}
