import React, { Component } from 'react'

export default class NameEntryField extends Component {

   componentDidMount() {
   }

   render() {
      const {playerNum} = this.props
      return (
         <div className="form-group row">
            <label className="col-sm-2 col-form-label">Player {playerNum}</label>
            <div className="col-sm-10">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
               />
            </div>
         </div>
      )
   }
}
