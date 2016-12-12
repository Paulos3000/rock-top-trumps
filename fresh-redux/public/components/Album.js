import React from 'react'
import { Link } from 'react-router';

const Album = ({ album, i }) => {
   const truncateTitle = album.title.split(' ').splice(0,3).join(' ')
   return (
      <Link to={`albums/id-${album.id}`}>
         <span className='album'>
            <h2><span className='glyphicon glyphicon-book album-center'></span></h2>
            <h5>{truncateTitle}...</h5>
            <p><small>Author name (compute)</small></p>
         </span>
      </Link>
   )
}

export default Album;
