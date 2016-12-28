import React, { Component } from 'react'

import NameEntryField from './NameEntryField'
import NameEntryBtn from './NameEntryBtn'

export default class NameEntry extends Component {

   handleAddNames(e) {
      e.preventDefault();
      console.log('adding a name...')
      // just need to log ref'd name to console...
      console.log(this.refs.p1name.value)

      // fire action containing player name values to be passed to playerName state (prepare this first)

      // this.refs.commentForm.reset();
   }

   render() {
      const {players} = this.props

      switch(players) {
         case 2:
            return (
               <form ref='nameEntryForm' onSubmit={this.handleAddNames.bind(this)}>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label">Player ONE</label>
                     <div className="col-sm-10">
                        <input
                           ref='p1name'
                           type="text"
                           className="form-control"
                           placeholder="Name"
                        />
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label">Player TWO</label>
                     <div className="col-sm-10">
                        <input
                           ref='p2name'
                           type="text"
                           className="form-control"
                           placeholder="Name"
                        />
                     </div>
                  </div>
                  <input type='submit' hidden />
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
