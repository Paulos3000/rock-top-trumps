import React from 'react'

import Card from './Card'

import { cloudinaryConfig, CloudinaryImage } from 'react-cloudinary';
cloudinaryConfig({ cloud_name: 'ldldkmn0o' });

// Utilities...
import capsInit from '../util/capsInit'
import getCloudinaryId from '../util/getCloudinaryId'

const CardReveal = ({ onPlayer, players, activeCards, compareCards, activeAttribute, handleDistribute, playerInfo }) => {

   // What about ties??? Decide by card rank? Maybe add these.

   // Then pass this WINNER (.bind(null, winner)) to handleDistribute(), which will then pass that to the action, SWITCH_CARDS

   // define column width based on number of players
   let colsSm, colsXs
   switch(players) {
      case 2:
         colsSm, colsXs = 6
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
         colsSm, colsXs = null
   }

   // attribute being played
   const trumpAttribute = capsInit(activeAttribute)

   // calculate winning card
   let winner = compareCards.reduce((prev, curr) => prev.card.stats[activeAttribute] < curr.card.stats[activeAttribute] ? curr : prev)

   console.log('holaaa: ', winner)

   // get winning player id
   let winningPlayerId = winner.playerId

   const {p1, p2, p3, p4} = playerInfo

   let winningPlayerName;
   if (winningPlayerId === p1.id) {winningPlayerName = p1.name}
   if (winningPlayerId === p2.id) {winningPlayerName = p2.name}
   if (winningPlayerId === p3.id) {winningPlayerName = p3.name}
   if (winningPlayerId === p4.id) {winningPlayerName = p4.name}

   return (
      <div>
         <h2 className='centered'>{trumpAttribute}</h2>
         <hr />
         <div className="row">
            {compareCards.map( (card, i) =>
                  <div className={`col-xs-${colsXs} col-sm-${colsSm}`} key={i}>
                     <h4 className='centered faceoff-name'>{card.card.fullName}</h4>
                     <div className='avatar-wrapper'>
                        <CloudinaryImage className={`avatar avatar-${card.playerId}`} publicId={getCloudinaryId(card.card.tag)}/>
                        {/*<img className={`avatar avatar-${card.playerId}`} src={`/img/sq/${card.card.tag}.jpg`} />*/}
                        <h4 className='avatar-stat'>{card.card.stats[activeAttribute]}</h4>
                     </div>
                  </div>
            )}
         </div>
         <hr />
         <div className='centered'>
            <h2 className={`underline underline-pl-${winningPlayerId}`}>{winningPlayerName} wins!</h2>
            <h4>with</h4>
            <h2>{winner.card.fullName}</h2>
         </div>
         <div className='centered'>
            <button className='btn btn-default' onClick={handleDistribute.bind(null, winningPlayerId, compareCards)}>Distribute Cards</button>
         </div>
      </div>
   )
}

export default CardReveal
