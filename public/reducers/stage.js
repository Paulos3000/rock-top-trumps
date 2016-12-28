const stage = (state = 0, action) => {
   switch(action.type) {
      case 'CHANGE_STAGE' :
         return action.level
      default :
         return state
   }
   return state;
}

export default stage;
