const photos = (state = [], action) => {
   switch(action.type) {

      case 'FETCH_REMOTE_DATA_SUCCESS' :
         if (action.endpoint === 'photos') {
            if (action.response) {
               return action.response.data
            }
         }

      default :
         return state;
   }
   return state;
}

export default photos;
