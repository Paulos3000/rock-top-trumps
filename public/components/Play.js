import React, { Component } from 'react'

class Play extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      // run this code if needed...
   }
   render() {
      return (
         <div>
            <h1>Play</h1>
            <hr />
            <div className='jumbotron'>
               <p>Main playing area here...</p>
            </div>
            {/*insert switch statement which loads relevant page based on state.stage (or something)*/}
         </div>
      )
   } // end render
} // end Play component

import { connect } from 'react-redux'
import * as actions from '../actions/index'

const mapStateToProps = (state) => ({
   deck: state.deck
})

// re-define Play as the connect method
Play = connect(mapStateToProps, actions)(Play)

export default Play;
