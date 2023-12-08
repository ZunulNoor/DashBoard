import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch } from 'react-icons/bs';
import { FcMenu } from "react-icons/fc";
export default function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className="menu-icon">
        <FcMenu className='icon' onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className='icon' />
      </div>
      <div className="header_right">
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  )
}
