// Look-up table. List of todo OBJECTS, each written with id as its key
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      const nextState = { ...state };
      action.response.forEach(todo => {
         nextState[todo.id] = todo;
      })
      return nextState;
      case 'ADD_TODO_SUCCESS':
         return {
            // all previous todos by id key
            ...state,
            // manually entered todo, id as key, todo as object property
            [action.response.id]: action.response
         }
    default:
      return state
  }
}
export default byId;

export const getTodo = (state, id) => state[id];
