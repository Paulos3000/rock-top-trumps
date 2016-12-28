import React, { Component } from 'react'

import DynamicFooter from './DynamicFooter'

export default class Footer extends Component {
   render() {
      const {players, p1hand, p2hand, p3hand, p4hand} = this.props
      return (
         <footer className="footer">
            <div className="container">
               <div className="row">
                  <DynamicFooter />
               </div>
            </div>
         </footer>
      )
   }
}
