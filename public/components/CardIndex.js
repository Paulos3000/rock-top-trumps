import React, { Component } from 'react'

import CardList from './CardList'

class CardIndex extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      // run this code if needed...
   }
   render() {
      return (
         <div>
            <h1>Card Index</h1>
            <hr />
            <CardList deck={this.props.deck}/>
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
CardIndex = connect(mapStateToProps, actions)(CardIndex)

export default CardIndex;
