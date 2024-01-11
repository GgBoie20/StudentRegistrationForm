import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { LuView } from "react-icons/lu";
import Logo from './slogo.jpg'


const NavBar = () => {
  return (
    <nav  className='navContainer'>
      <img src={Logo} height="65px" width="150px" />
      <aside className='logoblock'>
        
        <h1>LOGO</h1>
      </aside>
      <aside className='listblock'>
        <ul>
          <NavLink to='/'>
              <li className='list'><span className='span'><IoHomeOutline /></span>
              <span>HOME</span>
              </li>
          </NavLink>
          <NavLink to='/ViewAll'>
              <li className='list'><span className='span'><LuView /></span><span>VIEW-ALL</span></li>
          </NavLink>
        </ul>
      </aside>
    </nav>
  )
}

export default NavBar