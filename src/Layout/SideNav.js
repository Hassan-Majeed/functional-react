import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserAlt, FaShoppingCart } from "react-icons/fa";

const SideNav = () => {
  return (
    <ul className='nav_wrapper' >
      <li> <NavLink className='nav_links' to='/dashboard'><FaHome className='me-2' /> <span>Dashboard</span> </NavLink> </li>
      <li> <NavLink className='nav_links' to='/about'><FaUserAlt className='me-2' /> <span>User</span> </NavLink> </li>
      <li> <NavLink className='nav_links' to='/paymentLogs'><FaShoppingCart className='me-2' /> <span> Payment Logs</span> </NavLink> </li>
      {/* <li> <NavLink activeClassName="active" className='nav_links' to='/notification'><FaUserAlt className='me-2' /> <span>Notifications</span> </NavLink> </li> */}
    </ul>
  );
}

export default SideNav;