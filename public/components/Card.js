import React from 'react'

import Avatar from './Avatar'

const Card = ({ card }) => (
   <div className='avatar-wrapper'>
      {/*<img className='avatar' src={`/img/sq/${card.tag}.jpg`} />*/}
      <Avatar
         guitaristId={card.tag}
         playerId={null}
      />
      <h4 className='avatar-caption'>{card.fullName}</h4>
   </div>
)

export default Card;
