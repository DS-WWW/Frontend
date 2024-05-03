import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import Footer from './Footer';
import "../css/Navbar.css";
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className='nav-left'>
          <NavLink to='/' className="nav-logo">
            <img alt="홈 아이콘" src={logo} height="60px" />
          </NavLink>
        </div>
        <ul className='nav-right'>
          <li className='nav-li'>
            <NavLink to='/Catfeed' className='nav-link'>
              Catfeed
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/Hospital' className='nav-link'>
              Hospital
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/Catfeed/CatfeedDetail' className='nav-link'>
              CatfeedDetail
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/Catcamera' className='nav-link'>
              Catcamera
            </NavLink>
          </li>
          <li className='nav-li'>
            <NavLink to='/Cardnews' className='nav-link'>
              Cardnews
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
    </>
  )
};

export default Navbar;