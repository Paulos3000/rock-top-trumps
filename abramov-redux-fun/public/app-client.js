import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// import todoApp reducer
import todoApp from './reducers/index'

const {defaultState} = [
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

const store = createStore(todoApp)

let nextTodoId = 0
class TodoApp extends Component {
   render() {
      return (
         <div className='container'>

            <h1>TodoApp</h1>
            <input ref={ node => {this.input = node} }></input>
            <button onClick={() => {
               console.log('dispatching action')
               store.dispatch(
                  {
                     type: 'ADD_TODO',
                     text: this.input.value,
                     id: nextTodoId++
                  }
               );
               this.input.value = ''
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

const render = () => ReactDOM.render(
   <TodoApp todos={store.getState().todos}/>,
   document.getElementById("root")
)

render()
store.subscribe(render)
