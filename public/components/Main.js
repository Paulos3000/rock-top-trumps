import React, { Component } from 'react';
import { Link } from 'react-router'

import Navbar from './Navbar'
import DynamicFooter from './DynamicFooter'

class Main extends Component {
   componentDidMount() {
      console.log('Component Mounted!')
      this.props.shuffleDeck()
   }
   render() {
      return (
         <div className='wrapper'>

            <Navbar />

            <div className='container'>
               {/*Render active route component (as matched in URL) and pass all props, regardless*/}
               {/*Alternative method is to connect() to specific component to pass only needed props*/}
               {/*Also note: can pass any individual prop by wrapping in curly braces and applying a key, followed by prop value*/}
               {React.cloneElement(this.props.children, this.props)}
            </div>

            {this.props.stage !== 0 ? <DynamicFooter {...this.props} /> : null}

         </div>
      )
   }
}

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
   deck: state.deck,
   stage: state.stage,
   players: state.players,
   p1: state.playerInfo.p1,
   p2: state.playerInfo.p2,
   p3: state.playerInfo.p3,
   p4: state.playerInfo.p4,
   activePlayer: state.activePlayer
})

import * as actions from '../actions'

Main = connect(mapStateToProps, actions)(Main)

export default Main;
