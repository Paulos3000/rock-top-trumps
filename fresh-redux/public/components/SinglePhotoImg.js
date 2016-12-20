import React from 'react'

const SinglePhotoImg = ({ singlePhoto, photoTitle }) => (
   <div>
      <h1>Single Photo</h1>
      <h3><i>{photoTitle}</i></h3>
      <hr />
      <img className='single-photo' src={singlePhoto.url} />
      <p>Album ID: {singlePhoto.albumId} | Photo ID: {singlePhoto.id}</p>
   </div>
)

export default SinglePhotoImg;
