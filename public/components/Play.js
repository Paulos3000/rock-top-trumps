import React, { Component } from 'react'

// import actions
import * as actions from '../actions'

// import components
import Landing from './Landing'
import NumPlayers from './NumPlayers'

// import utility
import shuffle from '../util/shuffle'

export default class Play extends Component {

   // 1 --> 2
   handleActiveCard = () => {

   }

   // 2 --> 3
   handleActiveCard = () => {

   }

   // 3 --> 4

   // 4 --> 5

   // 5 --> 1
   handleNextRound = () => {
      this.props.nextPlayer(this.props.players)
      this.props.changeStage(1)
   }

   render() {
      const {players, deck, changeNumPlayers, addNames, deal, stage, changeStage} = this.props

      const cloneDeck = deck.slice(0)

      switch(stage) {
         case 0:
         return (
            <div>
               <Landing
                  players={players}
                  deck={cloneDeck}
                  changeNumPlayers={changeNumPlayers}
                  addNames={addNames}
                  deal={deal}
                  changeStage={changeStage}
               />

               {/*insert switch statement which loads relevant page based on state.stage (or something)*/}

            </div>
         )
         case 1:
         return (
            <div className='centered'>
               <p><small>Stage 1</small></p>
               <hr />
               <h1>Pauls turn</h1>
               <h3>John and Rick look away now...</h3>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(2)}>Show Active Card</button>
            </div>
         )
         case 2:
         return (
            <div>
               <p className='centered'><small>Stage 2</small></p>
               <hr />
               <h4>Add selectable stats!</h4>
               <div>
                  <div className='avatar-wrapper'>
                     {/*<img className='avatar' src={`/img/sq/${card.tag}.jpg`} />*/}
                  </div>
                  <div className='centered'>
                     <h2 className='card-name centered'>Guitarist Name</h2>
                     <hr />
                     <p className='card-stat'>Technique:</p>
                     <p className='card-stat'>Riffage: </p>
                     <p className='card-stat'>Songwriting: </p>
                     <p className='card-stat'>Fame: </p>
                     <p className='card-stat'>Originality:</p>
                     <p className='card-stat'>Cool: </p>
                  </div>
               </div>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(3)}>Ready?</button>
            </div>
         )
         case 3:
         return (
            <div className='centered'>
               <p><small>Stage 3</small></p>
               <hr />
               <h1>All players look now.</h1>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(4)}>FIGHT</button>
            </div>
         )
         case 4:
         return (
            <div>
               <p className='centered'><small>Stage 4</small></p>
               <hr />
               <h4>Game Layout.</h4>
               <p>Header saying who wins?</p>
               <p>All players cards and stats shown.</p>
               <p>View divided horizontally by number of players</p>
               <p>Highlight trump stat</p>
               <p>Highlight winning card/player</p>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(5)}>Next</button>
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
