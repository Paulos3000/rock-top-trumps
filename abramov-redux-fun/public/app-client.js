import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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

// MAIN CONTAINER COMPONENT
const TodoApp = ( {store} ) => (
   <div className='container'>
      <h1>TodoApp</h1>
      <hr/>
      <AddTodo store={store}/>
      <VisibleTodoList store={store}/>
      <Footer store={store}/>
   </div>
)

// INPUT FIELD AND SUBMIT BUTTON (PRESENTATIONAL COMPONENT) 'Functional' Component - Input Field
let nextTodoId = 0   // global variable
const AddTodo = ( {store} ) => {
   let input;
   return (
   <div>
      <input ref={ node => {input = node} }></input>
      <button onClick={() => {
         store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
         })
         input.value = ''
      }}>Add Todo
      </button>
   </div>
   )
}

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

// VISIBLE TODO LIST (CLASS INTERMEDIATE CONTAINER COMPONENT)
class VisibleTodoList extends Component {
   componentDidMount() {
      const { store } = this.props;
      this.unsubscribe = store.subscribe(() =>
         this.forceUpdate()
      )
   }
   componentWillUnmount() {
      this.unsubscribe();
   }

   render() {
      const props = this.props;
      const { store } = props;
      const state = store.getState();

      return (
         <TodoList
            todos={ getVisibleTodos(state.todos, state.visibilityFilter) }
            onTodoClick={id =>
               store.dispatch({
                  type: 'TOGGLE_TODO',
                  id
               })
            }
         />
   )}
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

// FILTER LINK (CLASS INTERMEDIATE CONTAINER COMPONENT)
class FilterLink extends Component {
   componentDidMount() {
      const { store } = this.props;
      this.unsubscribe = store.subscribe(() =>
         this.forceUpdate()
      )
   }
   componentWillUnmount() {
      this.unsubscribe();
   }

   render() {
      const props = this.props;
      const { store } = props;
      const state = store.getState();  // redux store state, NOT react sta
      return (
         <Link
            active={props.filter === state.visibilityFilter}
            onClick={() => store.dispatch({
               type: 'SET_VISIBILITY_FILTER',
               filter: props.filter
            })
         }>
            {props.children}
         </Link>
      )
   }
}

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

// FOOTER (PRESENTATIONAL COMPONENT)
const Footer = ( {store} ) => (
   <p>
      Show:{' '}
      <FilterLink
         filter='SHOW_ALL'
         store={store}>All</FilterLink>{' '}
      <FilterLink
         filter='SHOW_ACTIVE'
         store={store}>Active</FilterLink>{' '}
      <FilterLink
         filter='SHOW_COMPLETED'
         store={store}>Completed</FilterLink>{' '}
   </p>
)

import { createStore } from 'redux'

// directly inject store + definition as prop to main app
ReactDOM.render(
   <TodoApp store={createStore(todoApp)} />,
   document.getElementById("root")
)

// no longer needed as store.subscribe called in lifecycle methods of intermediate container components above...
// -------------------------
// render()
// store.subscribe(render)
