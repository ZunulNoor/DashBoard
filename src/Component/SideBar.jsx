import React from 'react'
import { BsFillGrid3X3GapFill, } from 'react-icons/bs';
import { FcSalesPerformance } from "react-icons/fc";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { FcSupport } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";
export default function SideBar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <MdAdminPanelSettings className='icon_header' /> Admin
        </div>
        <span className='close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/">
            <FcBarChart className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <HiOutlineStatusOnline className='icon' /> Status
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/orders">
            <BsFillGrid3X3GapFill className='icon' /> Orders
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <PiUsersThreeDuotone className='icon' /> Agents
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <FcSalesPerformance className='icon' /> Total Sale <span> 4500 $</span>
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <FcSupport className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}
