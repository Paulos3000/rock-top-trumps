import React, { Component } from 'react'

// import components
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { Footer } from './Footer'

import { v4 } from 'node-uuid'

// CONNECT this up to itself to pass it the state.props (just like VisibleTodoList) to make it the container element whose props contain the global state.

export class App extends Component {
   render() {
      return (
         <div className='container'>
            <h2>Fresh-Redux</h2>
            <h3>Stripped bare, and experimenting with thunks and react-router-redux</h3>
            <hr />

            <AddTodo />
            <VisibleTodoList />
            <Footer />
            <hr />
         </div>
      )
   }
}
