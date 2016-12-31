import React, { Component } from 'react'

export default class DynamicFooter extends Component {
   render() {
      const {players, p1, p2, p3, p4} = this.props
      switch(players) {
         case 2:
            return (
               <footer className="footer">
                  <div className="container">
                     <div className="row">
                        <div className="col-xs-6">
                           <p className='centered pName'>{p1.name}</p>
                           <span className="card-count cc-2">{p1.hand.length}</span>
                        </div>
                        <div className="col-xs-6">
                           <p className='centered pName'>{p2.name}</p>
                           <span className="card-count cc-2">{p2.hand.length}</span>
                        </div>
                     </div>
                  </div>
               </footer>
            )
         case 3:
            return (
               <footer className="footer">
                  <div className="container">
                     <div className="row">
                        <div className="col-xs-4">
                           <p className='centered pName'>{p1.name}</p>
                           <span className="card-count cc-1">{p1.hand.length}</span>
                        </div>
                        <div className="col-xs-4">
                           <p className='centered pName'>{p2.name}</p>
                           <span className="card-count cc-2">{p2.hand.length}</span>
                        </div>
                        <div className="col-xs-4">
                           <p className='centered pName'>{p3.name}</p>
                           <span className="card-count cc-3">{p3.hand.length}</span>
                        </div>
                     </div>
                  </div>
               </footer>
            )
         case 4:
            return (
               <footer className="footer">
                  <div className="container">
                     <div className="row">
                        <div className="col-xs-3">
                           <p className='centered pName'>{p1.name}</p>
                           <span className="card-count cc-1">{p1.hand.length}</span>
                        </div>
                        <div className="col-xs-3">
                           <p className='centered pName'>{p2.name}</p>
                           <span className="card-count cc-2">{p2.hand.length}</span>
                        </div>
                        <div className="col-xs-3">
                           <p className='centered pName'>{p3.name}</p>
                           <span className="card-count cc-3">{p3.hand.length}</span>
                        </div>
                        <div className="col-xs-3">
                           <p className='centered pName'>{p4.name}</p>
                           <span className="card-count cc-4">{p4.hand.length}</span>
                        </div>
                     </div>
                  </div>
               </footer>
            )
         default :
            return null
      }
   }
}
