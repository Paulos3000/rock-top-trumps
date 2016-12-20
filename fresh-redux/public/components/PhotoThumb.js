import React from 'react'
import { Link } from 'react-router'

const PhotoThumb= ({ photo, albumId }) => {
   const photoId = photo.id
   return (
      <span>
         <Link to={`/albums/id-${albumId}/photo-${photoId}`}>
            <img className="photo-tile col-xs-4 col-sm-3 col-md-2" src={photo.thumbnailUrl} />
         </Link>
      </span>
   )
}

export default PhotoThumb;
