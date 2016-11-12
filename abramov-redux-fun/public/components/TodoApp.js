import React, { Component } from 'react'
import { createStore } from 'redux'

// import todoApp reducer
import todoApp from '../reducers/index'
// import store
const store = createStore(todoApp)

let nextTodoId = 0
export default class TodoApp extends Component {
   render() {
      return (
         <div>

            <h1>TodoApp</h1>

            <button onClick={() => {
               console.log('dispatching action')
               store.dispatch(
                  {
                     type: 'ADD_TODO',
                     text: 'Test',
                     id: 1
                  }
               )
            }}>Add Todo</button>

            <ul>
               {this.props.todos.map(todo =>
                  <li key={todo.id}>
                     {todo.text}
                  </li>
               )}
            </ul>
         </div>
      )
   }
}
