import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from './Main'
import Play from './Play'
import CardIndex from './CardIndex'

const Root = ({ store, history }) => (
   <Provider store={store}>
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
         <Route path='/' component={Main}>
            <IndexRoute component={Play}></IndexRoute>
            <Route path='/cardindex' component={CardIndex}></Route>
         </Route>
      </Router>
   </Provider>
)

Root.propTypes = {
   store: PropTypes.object.isRequired
}

export default Root;
