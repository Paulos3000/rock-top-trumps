import React from 'react'

import Card from './Card'

const CardList = ({ deck }) => (

   <div className="row">
      {deck.map( (card, i) => (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" key={i}>
               <Card card={card}/>
            </div>
         )
      )}
   </div>

)

export default CardList;
