import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// import specific actionCreator
import * as actions from '../actions/actionCreators'
// import SELECTORS
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './FetchError'

import { v4 } from 'node-uuid'

// import components
import Main from './Main'

const mapStateToProps = (state, { params, location, users, ownProps }) => {
   console.log('state.users: ', state.users)
   const filter = params.filter || 'all';
   const rootPage = params.rootPage || '';
   const pathname = location.pathname;
   return {
      users: state.users,
      rootPage,
      pathname
   }
}

// removed withRouter...
const App = connect(
   mapStateToProps,
   actions
)(Main);

export default App;
