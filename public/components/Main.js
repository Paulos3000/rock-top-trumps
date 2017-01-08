import React, { Component } from 'react';
import { Link } from 'react-router'

import Navbar from './Navbar'
import DynamicFooter from './DynamicFooter'

import deck from '../data/deck'

class Main extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.shuffleDeck(deck)
   }

   render() {

      const {players, p1, p2, p3, p4} = this.props.playerInfo

      // create player array...
      let playerArr = [];
      playerArr.push(p1, p2, p3, p4)

      // create active player array (excludes player objects not in the game)
      let activePlayerArr = [];
      let onPlaya;
      for (let i = 0; i < playerArr.length; i++) {
         if (playerArr[i].name !== null) {
            activePlayerArr.push(playerArr[i])
         }
      }

      return (
         <div className='wrapper'>

            <Navbar />

            <div className='container'>
               {React.cloneElement(this.props.children, this.props)}
            </div>

            {/* Render DynamicFooter only when cards have been dealt... */}
            {this.props.stage !== 0 ? <DynamicFooter activePlayerArr={activePlayerArr} {...this.props} /> : null}

         </div>
      )
   }
}

import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
   deck: state.deck,
   stage: state.stage,
   players: state.players,
   playerInfo: state.playerInfo,
   activePlayer: state.activePlayer,
   activeCards: state.activeCards,
   activeAttribute: state.activeAttribute
})

import * as actions from '../actions'

Main = connect(mapStateToProps, actions)(Main)

export default Main;
