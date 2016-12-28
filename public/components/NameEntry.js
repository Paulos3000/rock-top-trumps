import React, { Component } from 'react'

import NameEntryField from './NameEntryField'
import NameEntryBtn from './NameEntryBtn'

import {addNames} from '../actions'

export default class NameEntry extends Component {

   handleAddNames = (e) => {
      e.preventDefault();
      const {deck, players} = this.props

      const p1name = this.refs.p1name.value || null
      const p2name = this.refs.p2name.value || null

      if (players === 2) {
         this.props.addNames(p1name, p2name, p3name)
      }
      if (players === 3) {
         const p3name = this.refs.p3name.value || null
         this.props.addNames(p1name, p2name, p3name)
      }
      if (players === 4) {
         const p3name = this.refs.p3name.value || null
         const p4name = this.refs.p4name.value || null
         this.props.addNames(p1name, p2name, p3name, p4name)
      }
      this.props.deal(deck, players)

      // this.refs.commentForm.reset();
   }

   render() {
      const {players, addNames} = this.props

      switch(players) {
         case 2:
            return (
               <form ref='nameEntryForm' onSubmit={this.handleAddNames.bind()}>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label">Player 1</label>
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
                     <label className="col-sm-2 col-form-label">Player 2</label>
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
               <form ref='nameEntryForm' onSubmit={this.handleAddNames}>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label">Player 1</label>
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
                     <label className="col-sm-2 col-form-label">Player 2</label>
                     <div className="col-sm-10">
                        <input
                           ref='p2name'
                           type="text"
                           className="form-control"
                           placeholder="Name"
                        />
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label">Player 3</label>
                     <div className="col-sm-10">
                        <input
                           ref='p3name'
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

         case 4:
            return (
               <form ref='nameEntryForm' onSubmit={this.handleAddNames}>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label">Player 1</label>
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
                     <label className="col-sm-2 col-form-label">Player 2</label>
                     <div className="col-sm-10">
                        <input
                           ref='p2name'
                           type="text"
                           className="form-control"
                           placeholder="Name"
                        />
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label">Player 3</label>
                     <div className="col-sm-10">
                        <input
                           ref='p3name'
                           type="text"
                           className="form-control"
                           placeholder="Name"
                        />
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-sm-2 col-form-label">Player 4</label>
                     <div className="col-sm-10">
                        <input
                           ref='p4name'
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

         default:
            return null;
      }
   }
}
