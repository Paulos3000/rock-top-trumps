import React, { Component } from 'react'

// import actions
import * as actions from '../actions'

// import components
import GameSetup from './GameSetup'
import NumPlayers from './NumPlayers'
import LeaderCard from './LeaderCard'
import CardReveal from './CardReveal'

// import utility
import shuffle from '../util/shuffle'

export default class Play extends Component {

   // 1 --> 2
   // add all active cards to state.activeCards (p1, p2, p3, p4)
   handleActiveCard = () => {
      let {p1, p2, p3, p4} = this.props;
      this.props.gatherCards(p1, p2, p3, p4)
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
      const {players, deck, changeNumPlayers, addNames, deal, stage, changeStage, activePlayer, activeCards} = this.props
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
               <h3>Other players look away</h3>
               {/*<h3>Look away:{' '}
                  {p2.name}
                  {players === 3 ? `, ${p3.name}` : null}
                  {players === 4 ? `, ${p3.name}, ${p4.name}` : null}
               </h3>*/}
               <button
                  className='btn btn-primary'
                  onClick={this.handleActiveCard}>
                  View Card
               </button>
            </div>
            )

         case 2:
            return <LeaderCard onPlayer={onPlayer} selectAttribute={this.selectAttribute} activeCards={this.props.activeCards}/>

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
               <CardReveal
                  handleDistribute={this.handleDistribute}
                  activeCards={activeCards}
                  players={players}
               />
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
