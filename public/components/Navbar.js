import React, { Component } from 'react'
import { Link } from 'react-router'

const Navbar = () => (
   <nav className="navigation-bar">
      <div className='container'>
            <ul className="navlist">
               <li>
                  <Link to='/'>
                     Play
                  </Link>
               </li>
               <li>
                  <Link to='/cardindex'>
                     Card Index
                  </Link>
               </li>
            </ul>
      </div>
   </nav>
)

export default Navbar;
