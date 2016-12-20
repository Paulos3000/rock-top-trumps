import React from 'react'

import Album from './Album'

const AlbumList = ({ albums, isFetching }) => {
   if (isFetching) {
      return <h4>Loading...</h4>
   }
   return (
   <div className="row">
      {/*albums.map( (album, i) => <Album key={i} i={i} album={album}/>)*/}
         {albums.map( (album, i) =>
            <div key={i} className="album-tile col-xs-4 col-sm-2">
               <Album album={album} i={i}/>
            </div>
         )}
   </div>
   )
}

export default AlbumList;
