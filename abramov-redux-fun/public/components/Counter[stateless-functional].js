import React, { PropTypes, Component } from 'react'

import { hello, goodbye, simpleFunc } from '../exporting'

// STATELESS FUNCTIONAL COMPONENT
const Counter = ({ value, onIncrement, onDecrement }) => (
   <div className='container'>
      <h1>Counter Page</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <h2>{value}</h2>
   </div>
)

export default Counter;
