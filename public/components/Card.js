import React from 'react'

const Card = ({ card }) => (
   <div className='avatar-wrapper'>
      <img className='avatar' src={`./img/sq/${card.imgURL}`} />
      <h4 className='avatar-caption'>{card.fullName}</h4>
   </div>
)

export default Card;

//Users/paulchild/Desktop/rock-top-trumps/rock-tt/public/static/img/cropped/bb_king.jpg
