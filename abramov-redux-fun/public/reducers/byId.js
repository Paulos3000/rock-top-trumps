// Look-up table. List of todo OBJECTS, each written with id as its key
const byId = (state = {}, action) => {
   if (action.response) {
      return {
         ...state,
         ...action.response.entities.todos
      }
   }
   return state;
}
export default byId;

export const getTodo = (state, id) => state[id];
