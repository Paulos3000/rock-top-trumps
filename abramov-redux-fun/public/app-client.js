import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// SAT 12th NOV - CONTINUE REFACTORING FROM TUTORIAL #21
//------------------------------------------------------

import { connect } from 'react-redux'

// import todoApp reducer
import todoApp from './reducers/index'

// MAIN CONTAINER COMPONENT
const TodoApp = () => (
   <div className='container'>
      <h1>TodoApp</h1>
      <hr/>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
   </div>
)

// ACTION CREATORS... (good to keep these separate from components)
let nextTodoId = 0   // global variable
const addTodo = (text) => ({
   type: 'ADD_TODO',
   id: nextTodoId++,
   text
})
const setVisibilityFilter = (filter) => ({
   type: 'SET_VISIBILITY_FILTER',
   filter
})
const toggleTodo = (id) => {
   return {
      type: 'TOGGLE_TODO',
      id
   }
}

// INPUT FIELD AND SUBMIT BUTTON (PRESENTATIONAL COMPONENT) 'Functional' Component - Input Field
let AddTodo = ( {dispatch} ) => {
   let input;
   return (
   <div>
      <input ref={ node => {input = node} }></input>
      <button onClick={() => {
         dispatch(addTodo(input.value));
         input.value = ''
      }}>Add Todo
      </button>
   </div>
   )
}
AddTodo = connect()(AddTodo)   // this passes 'null' for mapStateToProps and dispatch method by default to mapDispatchToProps. Now this.props.dispatch should work on AddTodo. *Note the use of let binding to update component*

// FUNCTION - filter todos by action type (SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE)
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
// GENERATE CONTAINER WITH connect()...
const mapStateToTodoListProps = (state) => ({
   todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
const mapDispatchToTodoListProps = (dispatch) => ({
   onTodoClick(id) {
      dispatch(toggleTodo(id))
   }
})
// CONNECT CONTAINER TO PRESENTATIONAL (ie. pass props to presentational)
const VisibleTodoList = connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList)


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

// LINK (PRESENTATIONAL COMPONENT)
const Link = ( {active, children, onClick} ) => {
   if (active) {
      return <span>{children}</span>
   }
   return (
      <a href='#'
         onClick={e => {
            e.preventDefault();
            onClick();
         }}
      >
         {children}
      </a>
   )
}
// GENERATE CONTAINER WITH connect()...
const mapStateToLinkProps = (state, ownProps) => ({
   active: ownProps.filter === state.visibilityFilter
})
const mapDispatchToLinkProps = (dispatch, ownProps) => ({
   onClick() {
      dispatch(setVisibilityFilter(ownProps.filter))
   }
})
// CONNECT CONTAINER TO PRESENTATIONAL (ie. pass props to presentational)
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link)

// FOOTER (PRESENTATIONAL COMPONENT)
const Footer = () => (
   <p>
      Show:{' '}
      <FilterLink filter='SHOW_ALL'>All</FilterLink>{' '}
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>{' '}
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>{' '}
   </p>
)

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// const persistedState = loadState();

const store = createStore(todoApp);

console.log(store.getState())

// directly inject store + definition as prop to Provider
ReactDOM.render(
   <Provider store={store}>
      <TodoApp />
   </Provider>,
   document.getElementById("root")
)

// no longer needed as store.subscribe called in lifecycle methods of intermediate container components above...
// -------------------------
// render()
// store.subscribe(render)
