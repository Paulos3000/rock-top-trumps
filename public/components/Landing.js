import React, { Component } from 'react'

import NameEntry from './NameEntry'

export default class Landing extends Component {

   render() {
      const {players, deck, changeNumPlayers, deal, addNames} = this.props
      const handleDeal = () => {
         // add names to state. if not entered, throw error
         deal(deck, players)
         // change page
      }

      return (
         <div className='centered'>
            <h1>Rock Top Trumps</h1>

            <button className='btn btn-default' onClick={() => changeNumPlayers(2)}>2 Players</button>
            <button className='btn btn-default' onClick={() => changeNumPlayers(3)}>3 Players</button>
            <button className='btn btn-default' onClick={() => changeNumPlayers(4)}>4 Players</button>
            <hr/>

            <NameEntry
               players={players}
               addNames={addNames}
               deal={deal}
               deck={deck}
            />

            <button className='btn btn-default' onClick={() => handleDeal()}>Deal</button>
         </div>
      )
   }
}
