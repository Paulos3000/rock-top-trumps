import React, { Component } from 'react'
import { render } from 'react-dom'

// NEW (to sync history with store) -------------
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
// ----------------------------------------------

import Root from './components/Root'

// create/configure store
import configureStore from './configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
   <Root store={store} history={history}/>,
   document.getElementById("root")
)
