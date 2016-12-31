import React from 'react'

import Card from './Card'

const CardReveal = ({ players, activeCards, activeAttribute, handleDistribute }) => {

   // CALCULATE WINNER.
   // --> USE activeAttribute and activeCards.
   // --> USE > (greater than) to decide which is highest.
   // What about ties??? Decide by card rank? Maybe add these.

   // Then pass this WINNER (.bind(null, winner)) to handleDistribute(), which will then pass that to the action, SWITCH_CARDS

   switch(players) {

      case 2:
         return (
            <div>
               <div className="row">
                  {activeCards.map( (card, i) =>
                        card.card ?
                        <div>'yes'</div> :
                        null
                  )}
               </div>

               <h2>_______ Wins!</h2>
               <h3>Active Attribute: <i>{activeAttribute}</i></h3>
               <hr />
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
            <h3>Active Attribute: <i>{activeAttribute}</i></h3>
            <hr />
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
               <h3>Active Attribute: <i>{activeAttribute}</i></h3>
               <hr />
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
