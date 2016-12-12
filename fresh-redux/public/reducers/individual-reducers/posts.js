const posts = (state = [], action) => {
   switch(action.type) {

      case 'FETCH_REMOTE_DATA_SUCCESS' :
         if (action.endpoint === 'posts') {
            if (action.response) {
               return action.response.data
            }
         }
         
      default :
         return state;
   }
   return state;
}

export default posts;
