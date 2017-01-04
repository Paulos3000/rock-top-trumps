import React, { Component } from 'react'

import CardCount from './CardCount'

const DynamicFooter = (props) => {

   const {activePlayerArr, players} = props

   // dynamically size column width based on players active
   let footerCols;
   switch(players) {
      case 2 :
         footerCols = 6
         break;
      case 3 :
         footerCols = 4
         break;
      case 4:
         footerCols = 3
         break;
      default:
         footerCols = null
   }

   return (
      <footer className="footer">
         {/*<div className='footer-masthead'>Card Count</div>*/}
         <div className="container">
            <div className="row">
               {activePlayerArr.map( (player, i) =>
                  <CardCount
                     key={i}
                     player={player}
                     footerCols={footerCols}
                  />
               )}
            </div>
         </div>
      </footer>
   )
}

export default DynamicFooter;
