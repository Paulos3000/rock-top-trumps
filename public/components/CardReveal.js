import React from 'react'

import Card from './Card'

import capsInit from '../util/capsInit'

const CardReveal = ({ players, activeCards, activeAttribute, handleDistribute, playerInfo }) => {

   // CALCULATE WINNER NAME
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

   let compareCards = []
   for (let i = 0; i < activeCards.length; i++) {
      if (activeCards[i].card !== null) {
         compareCards.push(activeCards[i])
      }
   }

   let winner = compareCards.reduce((prev, curr) => prev.card.stats[activeAttribute] < curr.card.stats[activeAttribute] ? curr : prev)

   let winningPlayerId = winner.playerId

   console.log('winningPlayerId: ', winningPlayerId)

   const {p1, p2, p3, p4} = playerInfo

   let winningPlayerName;
   if (winningPlayerId === p1.id) {winningPlayerName = p1.name}
   if (winningPlayerId === p2.id) {winningPlayerName = p2.name}
   if (winningPlayerId === p3.id) {winningPlayerName = p3.name}
   if (winningPlayerId === p4.id) {winningPlayerName = p4.name}

   // handleWinningPlayer(winningPlayerName)


   return (
      <div>
         <h2 className='centered'>Attribute: {trumpAttribute}</h2>
         <hr />
         <div className="row">
            {compareCards.map( (card, i) =>
                  <div className={`col-xs-${colsXs} col-sm-${colsSm}`} key={i}>
                     <div className='avatar-wrapper'>
                        <img className={`avatar avatar-${card.playerId}`} src={`/img/sq/${card.card.tag}.jpg`} />
                        <h4 className='avatar-stat'>{card.card.stats[activeAttribute]}</h4>
                     </div>
                  </div>
            )}
         </div>
         <hr />
         <h4 className='centered'>Winning card: {winner.card.fullName}</h4>
         <h4 className='centered'>Winner: {winningPlayerName}</h4>
         <div className='centered'>
            <button className='btn btn-primary' onClick={handleDistribute.bind({}, winningPlayerId, compareCards)}>Distribute Cards</button>
         </div>
      </div>
   )
}

export default CardReveal
