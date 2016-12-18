import React, { Component } from 'react';
import { Link } from 'react-router'

import Navbar from './Navbar'

export default class Main extends Component {
   // run users fetch on this, (runs every time) then user id can be mapped to name.
   render() {
      return (
         <div>
            <Navbar />
            <div className='container'>
               {/*Render active route component (as matched in URL) and pass all props, regardless*/}
               {/*Alternative method is to connect() to specific component to pass only needed props*/}
               {/*Also note: can pass any individual prop by wrapping in curly braces and applying a key, followed by prop value*/}
               {React.cloneElement(this.props.children, this.props)}
            </div>
         </div>
      )
   }
}
