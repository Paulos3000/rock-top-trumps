import React from 'react'

import capsInit from '../util/capsInit'

const CardsWon = ({ players, onPlayer, compareCards, handleNextRound, activeAttribute }) => {

   // calculate winning card
   let winner = compareCards.reduce((prev, curr) => prev.card.stats[activeAttribute] < curr.card.stats[activeAttribute] ? curr : prev)

   // get winning player id
   let winningPlayerId = winner.playerId

   // SPLIT COLUMNS INTO 1, 2 OR 3 ON DESKTOP!!!

   // define column width based on number of players
   let colsSm, colsXs
   switch(players) {
      case 2:
         colsSm, colsXs = 12
         break;
      case 3:
         colsSm = 6
         colsXs = 12
         break;
      case 4:
         colsSm = 4
         colsXs = 12
         break;
      default:
         colsSm, colsXs = null
   }

   return (
      <div className='centered'>
         <h2>Cards won:</h2>
         <hr />
         {compareCards.map( (card, i) =>
            card.playerId !== onPlayer.id ?
            <div className={`col-xs-${colsXs} col-sm-${colsSm}`} key={i}>
               <div className='avatar-wrapper'>
                  <img className={`avatar avatar-${winningPlayerId}`} src={`/img/sq/${card.card.tag}.jpg`} />
                  <h4 className='avatar-caption'>{card.card.fullName}</h4>
               </div>
                  {Object.keys(card.card.stats).map( (stat, index) =>
                     <p key={index} className='card-stat'>{capsInit(stat)}: {card.card.stats[stat]}</p>
                  )}
                  <hr />
               </div>
               : null
         )}
         <button className='btn btn-default' onClick={handleNextRound}>Next Round</button>
      </div>
   )
}

export default CardsWon
