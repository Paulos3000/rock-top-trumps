import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
// import Main from './Main'
import Home from './Home'
import AnyPage from './AnyPage'
// import Primary from './Primary'
// import Secondary from './Secondary'


const Root = ({ store, history }) => (
   <Provider store={store}>
      <Router history={history}>
         <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='(:rootPage)' component={AnyPage}></Route>
         </Route>
      </Router>
   </Provider>
)

Root.propTypes = {
   store: PropTypes.object.isRequired
}

export default Root;
