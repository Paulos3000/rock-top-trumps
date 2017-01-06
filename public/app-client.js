import React, { Component } from 'react'
import { render } from 'react-dom'

// var url = require("/static/img/sq/andy_summers.jpg");

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from './components/Root'

import configureStore from './configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
   <Root store={store} history={history}/>,
   document.getElementById("root")
)
