import React, { Component } from 'react'

import NameEntry from './NameEntry'

export default class GameSetup extends Component {

   render() {
      const {changeNumPlayers} = this.props
      return (
         <div className='centered'>
            <h1>Rock Top Trumps</h1>

            <button className='btn btn-default' onClick={() => changeNumPlayers(2)}>2 Players</button>
            <button className='btn btn-default' onClick={() => changeNumPlayers(3)}>3 Players</button>
            <button className='btn btn-default' onClick={() => changeNumPlayers(4)}>4 Players</button>
            <hr/>

            <NameEntry {...this.props} />

         </div>
      )
   }
}
