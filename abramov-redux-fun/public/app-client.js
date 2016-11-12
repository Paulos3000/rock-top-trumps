import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// SAT 12th NOV - CONTINUE REFACTORING FROM TUTORIAL #21
//------------------------------------------------------

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

// 'Functional' Component
const AddTodo = ( {onAddClick} ) => {
   let input;

   return (
   <div>
      <input ref={ node => {input = node} }></input>
      <button onClick={() => {
            onAddClick(input.value);
            input.value = ''
         }}>Add Todo
      </button>
   </div>
   )
}

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
            <h3>Continue from lesson #21 (Dan Abramov) <small>[12.11.16]</small></h3>
            <hr/>

            <AddTodo
               onAddClick={text =>
                  store.dispatch({
                     type: 'ADD_TODO',
                     id: nextTodoId++,
                     text
                  })
               }
            />

            <TodoList
               todos={visibleTodos}
               onTodoClick={id => store.dispatch({
                  type: 'TOGGLE_TODO',
                  id
               })}
            />
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

// PRESENTATIONAL COMPONENT
const Todo = ( {onClick, completed, text} ) => (
   <li onClick={onClick}
      style={ {textDecoration:
         completed ?
         'line-through' :
         'none'}
      }
   >
      {text}
   </li>
)

// PRESENTATIONAL COMPONENT (list of <Todo>'s)
const TodoList = ( {todos, onTodoClick} ) => (
   <ul>
      {todos.map(todo =>
         <Todo key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
         />
      )}
   </ul>
)

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
