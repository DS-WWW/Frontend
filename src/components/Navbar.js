import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import Footer from './Footer';
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className='left'>
          <NavLink to='/' className='navlink'>
            Navbar
          </NavLink>
          <NavLink to='/Catfeed' className='navlink'>
            Catfeed
          </NavLink>
          <NavLink to='/Hospital' className='navlink'>
            Hospital
          </NavLink>
          <NavLink to='/Catfeed/CatfeedDetail' className='navlink'>
            CatfeedDetail
          </NavLink>
          <NavLink to='/Catcamera' className='navlink'>
            Catcamera
          </NavLink>
          <NavLink to='/Cardnews' className='navlink'>
            Cardnews
          </NavLink>
        </div>
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