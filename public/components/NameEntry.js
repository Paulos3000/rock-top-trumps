import React, { Component } from 'react'

import NameEntryField from './NameEntryField'
import NameEntryBtn from './NameEntryBtn'

import {addNames} from '../actions'

export default class NameEntry extends Component {

   handleDeal = (e) => {
      e.preventDefault();
      const {deck, players} = this.props

      const p1name = this.refs.p1name.value || 'Player 1'
      const p2name = this.refs.p2name.value || 'Player 2'

      if (players === 2) {
         this.props.addNames(p1name, p2name)
      }
      if (players === 3) {
         const p3name = this.refs.p3name.value || 'Player 3'
         this.props.addNames(p1name, p2name, p3name)
      }
      if (players === 4) {
         const p3name = this.refs.p3name.value || 'Player 3'
         const p4name = this.refs.p4name.value || 'Player 4'
         this.props.addNames(p1name, p2name, p3name, p4name)
      }
      this.props.deal(deck, players)
      this.props.changeStage(1)

      // this.refs.commentForm.reset();
   }

   render() {
      const {players, addNames} = this.props

      switch(players) {
         case 2:
            return (
               <form ref='nameEntryForm' onSubmit={this.handleDeal}>
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
                  <NameEntryBtn handleDeal={this.handleDeal} />
               </form>
            )

         case 3:
            return (
               <form ref='nameEntryForm' onSubmit={this.handleDeal}>
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
                  <NameEntryBtn handleDeal={this.handleDeal} />
               </form>
            )

         case 4:
            return (
               <form ref='nameEntryForm' onSubmit={this.handleDeal}>
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
                  <NameEntryBtn handleDeal={this.handleDeal} />
               </form>
            )

         default:
            return null;
      }
   }
}
