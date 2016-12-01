import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// import specific actionCreator
import * as actions from '../actions/actionCreators'
// import SELECTORS
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './FetchError'

// import components
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { Footer } from './Footer'

import { v4 } from 'node-uuid'

// CONNECT this up to itself to pass it the state.props (just like VisibleTodoList) to make it the container element whose props contain the global state.

class App extends Component {
   render() {

      return (
         <div className='container'>
            <h2>App.js</h2>
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

const mapStateToProps = (state, { params }) => {
   const filter = params.filter || 'all';
   return {
      isFetching: getIsFetching(state, filter),
      errorMessage: getErrorMessage(state, filter),
      todos: getVisibleTodos(state, filter),
      filter
   }
}

App = withRouter(connect(
   mapStateToProps,
   actions
)(App));

export default App;
