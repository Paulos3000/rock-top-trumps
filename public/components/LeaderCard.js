import React from 'react'

const LeaderCard = ({ selectAttribute, onPlayer, activeCards }) => {

   console.log('onPlayer ID = ', onPlayer.id)
   console.log('activeCards = ', activeCards)
   const leadingCard = activeCards.find(card => card.playerId === onPlayer.id)
   console.log('leadingCard = ', leadingCard)

   // TRY PASSING 'state.activeCards' to LeaderCard. Also try to get player ids in there somehow.... (see GATHER_CARDS action)

   return (
   <div>
      <div className='avatar-wrapper'>
         <img className='avatar' src={`/img/sq/${leadingCard.card.tag}.jpg`} />
      </div>
      <div className='centered'>
         <h2 className='card-name centered'>{leadingCard.card.fullName}</h2>
         <hr />
         <button
            className='btn btn-default btn-block'
            onClick={selectAttribute}>
            Technique: {leadingCard.card.stats.technique}
         </button>
         <button
            className='btn btn-default btn-block'
            onClick={selectAttribute}>
            Riffage: {leadingCard.card.stats.riffage}
         </button>
         <button
            className='btn btn-default btn-block'
            onClick={selectAttribute}>
            Songwriting: {leadingCard.card.stats.songwriting}
         </button>
         <button
            className='btn btn-default btn-block'
            onClick={selectAttribute}>
            Fame: {leadingCard.card.stats.fame}
         </button>
         <button
            className='btn btn-default btn-block'
            onClick={selectAttribute}>
            Originality: {leadingCard.card.stats.originality}
         </button>
         <button
            className='btn btn-default btn-block'
            onClick={selectAttribute}>
            Cool: {leadingCard.card.stats.cool}
         </button>
      </div>
   </div>
   )
}

export default LeaderCard
