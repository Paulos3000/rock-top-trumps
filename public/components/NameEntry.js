import React, { Component } from 'react'

import NameEntryField from './NameEntryField'
import NameEntryBtn from './NameEntryBtn'

export default class NameEntry extends Component {

   handleAddNames(e) {
      e.preventDefault();

      // const p1name = this.
      // const player1Name = this.refs.player1Name.value;
      // const player2Name = this.refs.player2Name.value;
      // const player3Name = this.refs.player3Name.value;
      // const player4Name = this.refs.player4Name.value;
      // console.log('Player 1 Name: ', player1Name)

      // fire action containing player name values to be passed to playerName state (prepare this first)

      this.refs.commentForm.reset();
   }

   render() {
      const {players} = this.props


      switch(players) {
         case 2:
            return (
               <form ref='nameEntryForm'>
                  <NameEntryField playerNum={1} />
                  <NameEntryField playerNum={2} />
                  <NameEntryBtn handleAddNames={this.handleAddNames} />
               </form>
            )

         case 3:
            return (
               <form ref='nameEntryForm'>
                  <NameEntryField playerNum={1} />
                  <NameEntryField playerNum={2} />
                  <NameEntryField playerNum={3} />
                  <NameEntryBtn handleAddNames={this.handleAddNames} />
               </form>
            )

         case 4:
            return (
               <form ref='nameEntryForm'>
                  <NameEntryField playerNum={1} />
                  <NameEntryField playerNum={2} />
                  <NameEntryField playerNum={3} />
                  <NameEntryField playerNum={4} />
                  <NameEntryBtn handleAddNames={this.handleAddNames} />
               </form>
            )

         default:
            return null;
      }
   }
}
