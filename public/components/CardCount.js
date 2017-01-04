import React from 'react'

const CardCount = ({ player, footerCols }) => (
   <div className={`col-xs-${footerCols}`}>
      <p className='centered pName'>{player.name}</p>
      <span className={`card-count cc-${player.id}`}>{player.hand.length}</span>
   </div>
)

export default CardCount;
