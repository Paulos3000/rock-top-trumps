import React, { Component } from 'react'
import { Link } from 'react-router'

const Navbar = () => (
   <nav className="navbar navbar-default">
      <div className='container'>
         <div className="container-fluid">
            <div className="navbar-header">
               <Link className='navbar-brand' to='/'>
                  Rock Top Trumps
               </Link>
            </div>
            <ul className="nav navbar-nav">
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
      </div>
   </nav>
)

export default Navbar;
