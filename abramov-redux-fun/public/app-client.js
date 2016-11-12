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

// function to filter todos list by action type (SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE)
const getVisibleTodos = (todos, filter) => {
   switch(filter) {
      case 'SHOW_ALL' :
         return todos;
      case 'SHOW_ACTIVE' :
         return todos.filter(
            t => !t.completed
         )
      case 'SHOW_COMPLETED' :
         return todos.filter(
            t => t.completed
         )
   }
}

let nextTodoId = 0   // global variable
class TodoApp extends Component {
   render() {
      let {todos, visibilityFilter} = this.props   // passed on main render component via spread operator! - IMPORTANT

      // assign a new filtered array of visible todos
      const visibleTodos = getVisibleTodos(todos, visibilityFilter)

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
               {visibleTodos.map(todo =>
                  <li key={todo.id}
                     onClick={() => {
                        store.dispatch({
                           type: 'TOGGLE_TODO',
                           id: todo.id
                        });
                     }}
                     style={ {textDecoration:
                        todo.completed ?
                        'line-through' :
                        'none'}
                     }
                  >
                     {todo.text}
                  </li>
               )}
            </ul>
            <p>
               Show:{' '}
               <FilterLink
                  filter='SHOW_ALL'
                  currentFilter={visibilityFilter}>All</FilterLink>{' '}
               <FilterLink
                  filter='SHOW_ACTIVE'
                  currentFilter={visibilityFilter}>Active</FilterLink>{' '}
               <FilterLink
                  filter='SHOW_COMPLETED'
                  currentFilter={visibilityFilter}>Completed</FilterLink>{' '}
            </p>
         </div>
      )
   }
}

const FilterLink = ( {filter, currentFilter, children} ) => {
   if (filter === currentFilter) {
      return <span>{children}</span>
   }
   return (
      <a href='#'
         onClick={e => {
            e.preventDefault();
            store.dispatch({
               type: 'SET_VISIBILITY_FILTER',
               filter
            })
         }}
      >
         {children}
      </a>
   )
}

const render = () => ReactDOM.render(
   <TodoApp {...store.getState()}/>,
   document.getElementById("root")
)

render()
store.subscribe(render)
