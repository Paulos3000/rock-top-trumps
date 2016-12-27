import React from 'react'

const Card = ({ card }) => (
   <div>
      <img className='avatar' src={`./img/cropped/${card.imgURL}`} />
      <p>{card.fullName}</p>
   </div>
)

export default Card;

//Users/paulchild/Desktop/rock-top-trumps/rock-tt/public/static/img/cropped/bb_king.jpg
