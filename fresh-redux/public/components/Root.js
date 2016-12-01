import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import Secondary from './Secondary'

const Root = ({ store, history }) => (
   <Provider store={store}>
      <Router history={history}>
         <Route path='/(:filter)' component={App}>
            <Route path='/secondary' component={Secondary}></Route>
         </Route>
      </Router>
   </Provider>
)

Root.propTypes = {
   store: PropTypes.object.isRequired
}

export default Root;
