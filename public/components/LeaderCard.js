import React from 'react'

import Avatar from './Avatar'

import capsInit from '../util/capsInit'

// import { cloudinaryConfig, CloudinaryImage } from 'react-cloudinary';
// cloudinaryConfig({ cloud_name: 'ldldkmn0o' });
// import getCloudinaryId from '../util/getCloudinaryId'

const LeaderCard = ({ selectAttribute, onPlayer, activeCards }) => {

   const leadingCard = activeCards.find(card => card.playerId === onPlayer.id)
   const {tag, fullName, band, stats} = leadingCard.card

   return (
      <div>
         <div className='avatar-wrapper'>
            <Avatar
               guitaristId={tag}
               playerId={onPlayer.id}
            />
         </div>
         <div className='centered'>
            <h2 className='centered card-name'>{fullName}</h2>
            <h4 className='centered'>{band}</h4>
            <hr />

            {Object.keys(stats).map( (key, i) =>
               <button
                  key={i}
                  className='btn btn-default btn-block'
                  onClick={selectAttribute.bind(null, key)}>
                  {capsInit(key)}: {stats[key]}
               </button>
            )}

         </div>
      </div>
   )
}

export default LeaderCard
