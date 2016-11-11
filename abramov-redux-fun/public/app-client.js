import React from 'react'
import { render } from 'react-dom'

import { store, history } from './store'

import { Provider } from 'react-redux'
import { Router } from 'react-router'

import routes from './routes'

render(
   <Provider store={store}>
      <Router history={history} routes={routes} />
   </Provider>,
    document.getElementById("root")
)
