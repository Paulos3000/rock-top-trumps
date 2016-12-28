import React, { Component } from 'react'

export default class DynamicFooter extends Component {
   render() {
      const {players, p1hand, p2hand, p3hand, p4hand} = this.props
      switch(players) {
         case 2:
            return (
               <div>
                  <div className="col-xs-6">
                     <span className="card-count cc-1">{p1hand.length}</span>
                  </div>
                  <div className="col-xs-6">
                     <span className="card-count cc-2">{p2hand.length}</span>
                  </div>
               </div>
            )
         case 3:
            return (
               <div>
                  <div className="col-xs-4">
                     <span className="card-count cc-1">{p1hand.length}</span>
                  </div>
                  <div className="col-xs-4">
                     <span className="card-count cc-2">{p2hand.length}</span>
                  </div>
                  <div className="col-xs-4">
                     <span className="card-count cc-3">{p3hand.length}</span>
                  </div>
               </div>
            )
         case 4:
            return (
               <div>
                  <div className="col-xs-3">
                     <span className="card-count cc-1">{p1hand.length}</span>
                  </div>
                  <div className="col-xs-3">
                     <span className="card-count cc-2">{p2hand.length}</span>
                  </div>
                  <div className="col-xs-3">
                     <span className="card-count cc-3">{p3hand.length}</span>
                  </div>
                  <div className="col-xs-3">
                     <span className="card-count cc-4">{p4hand.length}</span>
                  </div>
               </div>
            )
         default :
            return null
      }
   }
}
