import React from 'react'

import Card from './Card'

const CardReveal = ({ players, activeCards, activeAttribute, handleDistribute }) => {
   const numbers = [1,2,3,4]
   console.log('numbers: ', numbers)
   return (
      <div>
         {numbers.map( (number, i) =>
            2+2 === 5 ? <p key={i}>{number}</p> : <p>'fuck off'</p>
         )}
      </div>
   )
}

export default CardReveal
