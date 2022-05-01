import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'

import { SidebarData } from '../../Data/Data'


const Sidebar = () => {

  const [selected, setSelected] = useState(0)


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
        {SidebarData.map((item, index) => {
          return (
            <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              
            >
              <item.icon />
              <span>
                {item.heading}
              </span>
              
            </div>
            )
        })}
        

        </div>
      </div>

  )
}

export default Sidebar
