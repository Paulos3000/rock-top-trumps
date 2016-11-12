import React, { PropTypes, Component } from 'react'

import { hello, goodbye, simpleFunc } from '../exporting'

// STATELESS FUNCTIONAL COMPONENT
class Counter extends Component {
   render() {
      const { value, onIncrement, onDecrement } = this.props
      return (
         <div className='container'>
            <h1>Counter Page</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <h3>{value}</h3>
         </div>
      )
   }
}

export default Counter;
