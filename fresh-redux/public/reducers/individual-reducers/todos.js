const todos = (state = [], action) => {
   switch(action.type) {

      case 'FETCH_REMOTE_DATA_SUCCESS' :
         if (action.endpoint === 'todos') {
            if (action.response) {
               return action.response.data
            }
         }
         
      default :
         return state;
   }
   return state;
}

export default todos;
