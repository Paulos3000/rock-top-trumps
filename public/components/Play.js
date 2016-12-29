import React, { Component } from 'react'

// import actions
import * as actions from '../actions'

// import components
import GameSetup from './GameSetup'
import NumPlayers from './NumPlayers'


// import utility
import shuffle from '../util/shuffle'

export default class Play extends Component {

   // 1 --> 2
   // add all active cards to state.activeCards (p1, p2, p3, p4)
   handleActiveCard = () => {
      this.props.changeStage(2)
   }
   // 2 --> 3
   selectAttribute = () => {
      this.props.changeStage(3)
   }
   // 3 --> 4
   handleReveal = () => {
      this.props.changeStage(4)
   }
   // 4 --> 5
   // this requires the calculation of which attribute is highest
   // all cards go to HAND of WINNER
   handleDistribute = () => {
      this.props.changeStage(5)
   }
   // 5 --> 1
   handleNextRound = () => {
      this.props.nextPlayer(this.props.players)
      this.props.changeStage(1)
   }

   render() {
      const {players, deck, changeNumPlayers, addNames, deal, stage, changeStage, activePlayer} = this.props
      const cloneDeck = deck.slice(0)

      const {p1, p2, p3, p4} = this.props

      let onPlayer;
      switch(activePlayer) {
         case 1:
            onPlayer = p1
            break;
         case 2:
            onPlayer = p2
            break;
         case 3:
            onPlayer = p3
            break;
         case 4:
            onPlayer = p4
            break;
         default:
            null
      }

      switch(stage) {

         case 0:
            return <GameSetup {...this.props} />

         case 1:
            return (
            <div className="centered">
               <p><small>Stage 1</small></p>
               <hr />
               <h1>Player turn: {onPlayer.name}</h1>
               <h3>Look away:{' '}
                  {p2.name}
                  {players === 3 ? `, ${p3.name}` : null}
                  {players === 4 ? `, ${p3.name}, ${p4.name}` : null}
               </h3>
               <button
                  className='btn btn-primary'
                  onClick={this.handleActiveCard}>
                  Show Active Card
               </button>
            </div>
            )

         case 2:
            return (
            <div>
                  <div className='avatar-wrapper'>
                     <img className='avatar' src={`/img/sq/${onPlayer.hand[0].tag}.jpg`} />
                  </div>
                  <div className='centered'>
                     <h2 className='card-name centered'>{onPlayer.hand[0].fullName}</h2>
                     <hr />
                     <button className='btn btn-default btn-block'>Technique: {onPlayer.hand[0].stats.technique}</button>
                     <button className='btn btn-default btn-block'>Riffage: {onPlayer.hand[0].stats.riffage}</button>
                     <button className='btn btn-default btn-block'>Songwriting: {onPlayer.hand[0].stats.songwriting}</button>
                     <button className='btn btn-default btn-block'>Fame: {onPlayer.hand[0].stats.fame}</button>
                     <button className='btn btn-default btn-block'>Originality: {onPlayer.hand[0].stats.originality}</button>
                     <button className='btn btn-default btn-block'>Cool: {onPlayer.hand[0].stats.cool}</button>
                  </div>
               <div>
                  <button className='btn btn-primary btn-block' onClick={this.selectAttribute}>Select Attribute</button>
               </div>
            </div>
            )

         case 3:
         return (
            <div className='centered'>
               <p><small>Stage 3</small></p>
               <hr />
               <h1>All players look now.</h1>
               <button className='btn btn-primary' onClick={this.handleReveal}>Reveal All Cards</button>
            </div>
         )

         case 4:
         return (
            <div>
               <p className='centered'><small>Stage 4</small></p>
               <hr />
               <h2>_______ Wins!</h2>
               <div>
                  <h2 className='card-name centered'>{onPlayer.hand[0].fullName}</h2>
                  <hr />
                  <p className='card-stat'>Technique: {onPlayer.hand[0].stats.technique}</p>
                  <p className='card-stat'>Riffage: {onPlayer.hand[0].stats.riffage}</p>
                  <p className='card-stat'>Songwriting: {onPlayer.hand[0].stats.songwriting}</p>
                  <p className='card-stat'>Fame: {onPlayer.hand[0].stats.fame}</p>
                  <p className='card-stat'>Originality: {onPlayer.hand[0].stats.originality}</p>
                  <p className='card-stat'>Cool: {onPlayer.hand[0].stats.cool}</p>
               </div>
               <button className='btn btn-primary' onClick={this.handleDistribute}>Distribute Cards</button>
            </div>
         )
         case 5:
         return (
            <div className='centered'>
               <p><small>Stage 5</small></p>
               <hr />
               <h1>Paul Wins</h1>
               <h3>Card(s) won:</h3>
               <p>(List cards won from other players)</p>
               <button className='btn btn-primary' onClick={this.handleNextRound}>Next Round</button>
            </div>
         )
      }

   }
}
