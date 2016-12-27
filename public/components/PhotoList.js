import React from 'react'
import PhotoThumb from './PhotoThumb'

const PhotoList = ({ albumId, albumPhotos, isFetching }) => {
   if (isFetching) {
      return <h4>Fetching data...</h4>
   }
   return (
      <div className='row photo-row'>
         {albumPhotos.map( (photo, i) => (
            <PhotoThumb key={i} photo={photo} albumId={albumId} />)
         )}
      </div>
   )
}

export default PhotoList;
