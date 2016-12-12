import React, { Component } from 'react'
import { Link } from 'react-router'

const Navbar = () => (
   <nav className="navbar navbar-default">
      <div className='container'>
         <div className="container-fluid">
            <div className="navbar-header">
               <Link className='navbar-brand' to='/'>
                  JSON-Placeholder App
               </Link>
            </div>
            <ul className="nav navbar-nav">
               <li className="active">
               </li>
               <li>
                  <Link to='/users'>
                     Users
                  </Link>
               </li>
               <li>
                  <Link to='/posts'>
                     Posts
                  </Link>
               </li>
               <li>
                  <Link to='/albums'>
                     Albums
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
)

export default Navbar;
