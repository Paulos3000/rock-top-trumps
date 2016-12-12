import React from 'react'

import Album from './Album'

const AlbumList = ({ albums }) => (
   <div>
      {albums.map( (album, i) => <Album key={i} i={i} album={album}/>)}
   </div>
)

export default AlbumList;
