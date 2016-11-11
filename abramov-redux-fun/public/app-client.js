import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import counter from './reducers/reducers'
import { counterFunction, todosFunction } from './reducers/reducers'

import Counter from './components/Counter'

const defaultState = [
   {
      id: 1,
      text: 'First item',
      completed: false
   },
   {
      id: 2,
      text: 'Second item',
      completed: true
   },
   {
      id: 3,
      text: 'Third item',
      completed: false
   }
]

const store = createStore(counterFunction)

const render = () => ReactDOM.render(
   <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch( {type: 'INCREMENT'} )}
      onDecrement={() => store.dispatch( {type: 'DECREMENT'} )}
   />,
   document.getElementById("root")
)

store.subscribe(render)
render()
