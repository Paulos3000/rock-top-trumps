import React from 'react'

const CardReveal = ({ handleDistribute, activeCards, players }) => {

   switch(players) {

      case 2:
         return (
            <div>
               <h2>_______ Wins!</h2>
               <div>
                  <p>{activeCards[0].card.fullName}</p>
               </div>
               <div>
                  <p>{activeCards[1].card.fullName}</p>
               </div>
               <button className='btn btn-primary' onClick={handleDistribute}>Distribute Cards</button>
            </div>
         )

      case 3:
         return (
            <div>
            <h2>_______ Wins!</h2>
            <div>
               <p>{activeCards[0].card.fullName}</p>
            </div>
            <div>
               <p>{activeCards[1].card.fullName}</p>
            </div>
            <div>
               <p>{activeCards[2].card.fullName}</p>
            </div>
            <button className='btn btn-primary' onClick={handleDistribute}>Distribute Cards</button>
         </div>
         )

      case 4:
         return (
            <div>
               <h2>_______ Wins!</h2>
               <div>
                  <p>{activeCards[0].card.fullName}</p>
               </div>
               <div>
                  <p>{activeCards[1].card.fullName}</p>
               </div>
               <div>
                  <p>{activeCards[2].card.fullName}</p>
               </div>
               <div>
                  <p>{activeCards[3].card.fullName}</p>
               </div>
               <button className='btn btn-primary' onClick={handleDistribute}>Distribute Cards</button>
            </div>
         )
   }
}

export default CardReveal
