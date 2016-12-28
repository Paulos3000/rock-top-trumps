import React, { Component } from 'react'

// import actions
import * as actions from '../actions'

// import components
import Landing from './Landing'
import NumPlayers from './NumPlayers'

// import utility
import shuffle from '../util/shuffle'

export default class Play extends Component {
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
            <div>
               STAGE 1: Create component to render to first page
            </div>
         )
      }

   }
}
