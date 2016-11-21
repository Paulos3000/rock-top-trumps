// FUNCTION - filter todos by action type (SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE)
export const getVisibleTodos = (todos, filter) => {
   switch(filter) {
      case 'all' :
         return todos;
      case 'completed' :
         return todos.filter(
            todo => todo.completed
         )
      case 'active' :
         return todos.filter(
            todo => !todo.completed
         )
      default :
         throw new Error(`Unknown filter: ${filter}`)
   }
}
