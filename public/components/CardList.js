import React from 'react'

import Card from './Card'

const CardList = ({ deck }) => (
   <div>
      {deck.map( (card, i) =>
         <Card key={i} card={card}/>
      )}
      <img src='./img/cropped/bb_king.jpg' />
   </div>
)

export default CardList;
