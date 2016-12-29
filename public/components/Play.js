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
               <h1 className='centered'>Pauls turn, John and Rick look away now.</h1>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(2)}>Stage 2</button>
            </div>
         )
         case 2:
         return (
            <div>
               <h1>STAGE 2</h1>
               <hr />
               <h4>Game Layout.</h4>
               <p>Pauls card in detail (CardDetail). Selectable stats.</p>
               <p>Once selected, move on to stage 3</p>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(3)}>Stage 3</button>
            </div>
         )
         case 3:
         return (
            <div>
               <h1>STAGE 3</h1>
               <hr />
               <h4>Game Layout.</h4>
               <p>"All players look. FIGHT."</p>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(4)}>Stage 4</button>
            </div>
         )
         case 4:
         return (
            <div>
               <h1>STAGE 4</h1>
               <hr />
               <h4>Game Layout.</h4>
               <p>Header saying who wins?</p>
               <p>All players cards and stats shown.</p>
               <p>View divided horizontally by number of players</p>
               <p>Highlight trump stat</p>
               <p>Highlight winning card/player</p>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(5)}>Stage 5</button>
            </div>
         )
         case 5:
         return (
            <div>
               <h1>STAGE 4</h1>
               <hr />
               <h4>Game Layout.</h4>
               <p>"Paul wins!"</p>
               <p>List cards won from other players</p>
               <button className='btn btn-primary' onClick={() => this.props.changeStage(1)}>Next Round</button>
            </div>
         )
      }

   }
}
