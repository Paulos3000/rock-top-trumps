import React, { Component } from 'react'

import Card from './Card'

class CardDetail extends Component {
   render() {
      const {card} = this.props
      const {technique, riffage, songwriting, fame, originality, cool} = card.stats

      return (
         <div>
            <div className='avatar-wrapper'>
               <img className='avatar' src={`/img/sq/${card.tag}.jpg`} />
            </div>
            <div className='centered'>
               <h2 className='card-name centered'>{card.fullName}</h2>
               <h4 className='centered'>{card.band}</h4>
               <hr />
               <p className='card-stat'>Technique: {technique}</p>
               <p className='card-stat'>Riffage: {riffage}</p>
               <p className='card-stat'>Songwriting: {songwriting}</p>
               <p className='card-stat'>Fame: {fame}</p>
               <p className='card-stat'>Originality: {originality}</p>
               <p className='card-stat'>Cool: {cool}</p>
            </div>
         </div>
      )
   }
}

import { connect } from 'react-redux'

import { findCard } from '../reducers/deck'

const mapStateToProps = (state, {params}) => {
   const id = parseInt(params.id)
   return {
      deck: state.deck,
      card: findCard(state.deck, id)
   }
}

// import actions
import * as actions from '../actions'

// re-define Main as the connect method
CardDetail = connect(mapStateToProps, actions)(CardDetail)

export default CardDetail
