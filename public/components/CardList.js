import React from 'react'
import { Link } from 'react-router'

import Card from './Card'

const CardList = ({ deck }) => (

   <div className="row">
      {deck.map( (card, i) => (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" key={i}>
               <Link to={`/cardindex/${card.id}-${card.tag}`}>
                  <Card card={card}/>
               </Link>
            </div>
         )
      )}
   </div>

)

export default CardList;
