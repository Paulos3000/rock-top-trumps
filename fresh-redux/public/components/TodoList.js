import React from 'react'

// child component
import { Todo } from './Todo'

// LIST OF TODOS (PRESENTATIONAL COMPONENT)
export const TodoList = ( {todos, onTodoClick} ) => (
   <ul>
      {todos.map(todo =>
         <Todo key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
         />
      )}
   </ul>
)
