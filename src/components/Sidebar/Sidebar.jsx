import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* 로고 부분 */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Food<span>L</span>og
        </span>
      </div>

      {/* 사이드 바 부분 */}
      <div className='menu'>
        <div className="menuItem">
          <div>
            Icon
          </div>
          <span>Dashboard</span>
        </div>
      </div>


    </div>
  )
}

export default Sidebar
