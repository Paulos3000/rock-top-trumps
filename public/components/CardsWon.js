import React from 'react'

import Avatar from './Avatar'

// Utilities...
import capsInit from '../util/capsInit'

const CardsWon = ({ players, onPlayer, playerInfo, compareCards, handleNextRound, activeAttribute }) => {

   // calculate winning card
   let winner = compareCards.reduce((prev, curr) => prev.card.stats[activeAttribute] < curr.card.stats[activeAttribute] ? curr : prev)

   // get winning player id
   let winningPlayerId = winner.playerId

   const {p1, p2, p3, p4} = playerInfo

   let winningPlayerName;
   if (winningPlayerId === p1.id) {winningPlayerName = p1.name}
   if (winningPlayerId === p2.id) {winningPlayerName = p2.name}
   if (winningPlayerId === p3.id) {winningPlayerName = p3.name}
   if (winningPlayerId === p4.id) {winningPlayerName = p4.name}

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
         <h2>{winningPlayerName}, collect your winnings...</h2>
         {/* List all cards that are NOT the winning card */}
         {compareCards.map( (card, i) =>
            card.playerId !== winningPlayerId ?
            <div className={`col-xs-${colsXs} col-sm-${colsSm}`} key={i}>
               <div className='avatar-wrapper'>
                  <Avatar
                     guitaristId={card.card.tag}
                     playerId={winningPlayerId}
                  />
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
