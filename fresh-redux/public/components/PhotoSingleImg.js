import React from 'react'

const PhotoSingleImg = ({ singlePhoto, isFetching, photoId }) => {
   if (isFetching) {
      return <h4>Fetching data...</h4>
   }
   return singlePhoto ?
      (<div>
         <h1>Single Photo</h1>
         <h3><i>{singlePhoto.title}</i></h3>
         <hr />
         <img className='single-photo' src={singlePhoto.url} />
         <p>Album ID: {singlePhoto.albumId} | Photo ID: {singlePhoto.id}</p>
      </div>) : null
}

export default PhotoSingleImg;
