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

// MAIN CONTAINER COMPONENT
let nextTodoId = 0   // global variable
const TodoApp = ( {todos, visibilityFilter} ) => (
   <div className='container'>
      <h1>TodoApp</h1>
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
         todos={getVisibleTodos(todos, visibilityFilter)}
         onTodoClick={id => store.dispatch({
            type: 'TOGGLE_TODO',
            id
         })}
      />
      <Footer
         visibilityFilter={visibilityFilter}
         onFilterClick={filter =>
            store.dispatch({
               type: 'SET_VISIBILITY_FILTER',
               filter
            })
         }
      />
   </div>
)

// INPUT FIELD AND SUBMIT BUTTON (PRESENTATIONAL COMPONENT) 'Functional' Component - Input Field
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

// LIST OF TODOS (PRESENTATIONAL COMPONENT)
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

// TODO (PRESENTATIONAL COMPONENT)
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

// FILTER LINK (PRESENTATIONAL COMPONENT)
const FilterLink = ( {onClick, filter, currentFilter, children} ) => {
   if (filter === currentFilter) {
      return <span>{children}</span>
   }
   return (
      <a href='#'
         onClick={e => {
            e.preventDefault();
            onClick(filter);
         }}
      >
         {children}
      </a>
   )
}

// FOOTER (PRESENTATIONAL COMPONENT)
const Footer = ( {visibilityFilter, onFilterClick} ) => (
   <p>
      Show:{' '}
      <FilterLink
         filter='SHOW_ALL'
         currentFilter={visibilityFilter}
         onClick={onFilterClick}>All</FilterLink>{' '}
      <FilterLink
         filter='SHOW_ACTIVE'
         currentFilter={visibilityFilter}
         onClick={onFilterClick}>Active</FilterLink>{' '}
      <FilterLink
         filter='SHOW_COMPLETED'
         currentFilter={visibilityFilter}
         onClick={onFilterClick}>Completed</FilterLink>{' '}
   </p>
)


const render = () => ReactDOM.render(
   <TodoApp {...store.getState()}/>,
   document.getElementById("root")
)

render()
store.subscribe(render)
