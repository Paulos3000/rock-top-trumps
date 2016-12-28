const players = (state=null, action) => {
   switch(action.type) {
      case 'CHANGE_NUM_PLAYERS' :
         return action.number
      default :
         return state
   }
   return state;
}

export default players;
