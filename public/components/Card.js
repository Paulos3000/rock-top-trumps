import React from 'react'

const Card = ({ card }) => (
   <div className='avatar-wrapper'>
      <img className='avatar' src={`/img/sq/${card.tag}.jpg`} />
      <h4 className='avatar-caption'>{card.fullName}</h4>
   </div>
)

export default Card;
