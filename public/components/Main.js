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

            <footer className="footer">
               <div className="container">
                  <div className="row">
                     <DynamicFooter
                        players={this.props.players}
                        p1={this.props.p1}
                        p2={this.props.p2}
                        p3={this.props.p3}
                        p4={this.props.p4}
                     />
                  </div>
               </div>
            </footer>

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
   p4: state.playerInfo.p4
})

// import actions
import * as actions from '../actions'

// re-define Main as the connect method
Main = connect(mapStateToProps, actions)(Main)

export default Main;
