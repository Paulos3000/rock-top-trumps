import React from 'react';
import { Link } from 'react-router'

const Post = ({ post, i }) => (
   <div className="media">

      <div className="media-left media-middle">
         <span className='media-object glyphicon glyphicon-pencil'></span>
      </div>

      <div className="media-body">
         <h4>{post.title}</h4>
         <p className='post-info-line'>
            <span>Post by <strong>Author Name (compute)</strong></span>
            <span> | </span>
            <span><small>Author Email (compute)</small></span>
         </p>
         <p><i>{post.body}</i></p>
         <p>
            <Link>
            <span className='post-info'>
               <span className="glyphicon glyphicon-comment"></span>
               <span className='user-info-word'>View Comments</span>
               <span className="badge user-info">13</span>
            </span>
            </Link>
         </p>
      </div>

      <hr />

   </div>
)

export default Post;
