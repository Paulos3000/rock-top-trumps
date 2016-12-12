import React from 'react'

const Album = ({ album, i }) => (
   <p key={i}>{i+1} {album.title}</p>
)

export default Album;
