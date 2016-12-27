import React from 'react'
import { Link } from 'react-router'

const User = ({ user, i }) => (

   <div className="media">

      <div className="media-left media-middle hidden-xs">
         <span className='media-object glyphicon glyphicon-user'></span>
      </div>

      <div className="media-body">
         <h4>{user.name}</h4>
         <p className='user-contact-line'>
            <span>{user.email}</span>
            <span> | </span>
            <span>{user.phone}</span>
            <span> | </span>
            <span>{user.website}</span>
         </p>
         <p className='user-info-line'>
            <Link>
               <span className='user-info'>
                  <span className="glyphicon glyphicon-edit"></span>
                  <span className='user-info-word'>Posts</span>
                  <span className="badge user-info">8</span>
               </span>
            </Link>
            <Link>
            <span className='user-info'>
               <span className="glyphicon glyphicon-book"></span>
               <span className='user-info-word'>Albums</span>
               <span className="badge user-info">4</span>
            </span>
            </Link>
            <Link>
            <span className='user-info'>
               <span className="glyphicon glyphicon-list-alt"></span>
               <span className='user-info-word'>To Do</span>
               <span className="badge user-info">7</span>
            </span>
            </Link>
         </p>
      </div>

      <hr />

   </div>
)

export default User;
