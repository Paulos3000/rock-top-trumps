import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import { TodoApp } from './TodoApp'

const Root = ({ store, history }) => (
   <Provider store={store}>
      <Router history={history}>
         <Route path='/(:filter)' component={TodoApp}/>
      </Router>
   </Provider>
)

Root.propTypes = {
   store: PropTypes.object.isRequired
}

export default Root;
