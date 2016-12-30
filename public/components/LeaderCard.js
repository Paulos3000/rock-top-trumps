import React from 'react'

const LeaderCard = ({ selectAttribute, onPlayer, activeCards }) => {

   // console.log('onPlayer ID = ', onPlayer.id)
   // console.log('activeCards = ', activeCards)
   const leadingCard = activeCards.find(card => card.playerId === onPlayer.id)
   // console.log('leadingCard = ', leadingCard)

   return (
      <div>
         <div className='avatar-wrapper'>
            <img className='avatar' src={`/img/sq/${leadingCard.card.tag}.jpg`} />
         </div>
         <div className='centered'>
            <h2 className='centered card-name leadercard-name'>{leadingCard.card.fullName}</h2>
            <button
               className='btn btn-default btn-block'
               onClick={selectAttribute.bind(null, 'technique')}>
               Technique: {leadingCard.card.stats.technique}
            </button>
            <button
               className='btn btn-default btn-block'
               onClick={selectAttribute.bind(null, 'riffage')}>
               Riffage: {leadingCard.card.stats.riffage}
            </button>
            <button
               className='btn btn-default btn-block'
               onClick={selectAttribute.bind(null, 'songwriting')}>
               Songwriting: {leadingCard.card.stats.songwriting}
            </button>
            <button
               className='btn btn-default btn-block'
               onClick={selectAttribute.bind(null, 'fame')}>
               Fame: {leadingCard.card.stats.fame}
            </button>
            <button
               className='btn btn-default btn-block'
               onClick={selectAttribute.bind(null, 'originality')}>
               Originality: {leadingCard.card.stats.originality}
            </button>
            <button
               className='btn btn-default btn-block'
               onClick={selectAttribute.bind(null, 'cool')}>
               Cool: {leadingCard.card.stats.cool}
            </button>
         </div>
      </div>
   )
}

export default LeaderCard
