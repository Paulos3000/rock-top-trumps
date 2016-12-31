import React from 'react'

import Card from './Card'

import capsInit from '../util/capsInit'

const CardReveal = ({ players, activeCards, activeAttribute, handleDistribute }) => {

   // CALCULATE WINNER.
   // --> USE activeAttribute and activeCards.
   // --> USE > (greater than) to decide which is highest.
   // What about ties??? Decide by card rank? Maybe add these.

   // Then pass this WINNER (.bind(null, winner)) to handleDistribute(), which will then pass that to the action, SWITCH_CARDS
   let colsSm
   let colsXs
   switch(players) {
      case 2:
         colsSm = 6
         colsXs = 6
         break;
      case 3:
         colsSm = 4
         colsXs = 12
         break;
      case 4:
         colsSm = 3
         colsXs = 6
         break;
      default:
         colsSm = null
         colsXs = null
   }
   const trumpAttribute = capsInit(activeAttribute)
   console.log(trumpAttribute)
   return (
      <div>
         <h2 className='centered'>{trumpAttribute}</h2>
         <hr />
         <div className="row">
            {activeCards.map( (card, i) =>
                  card.card ?
                  <div className={`col-xs-${colsXs} col-sm-${colsSm}`} key={i}>
                     <div className='avatar-wrapper'>
                        <img className={`avatar avatar-${card.playerId}`} src={`/img/sq/${card.card.tag}.jpg`} />
                        <h4 className='avatar-stat'>{card.card.stats[activeAttribute]}</h4>
                     </div>
                  </div>
                  : null
            )}
         </div>
      </div>
   )
}

export default CardReveal
