const activeCards = (state = null, action) => {
   switch(action.type) {
      case 'SUBMIT_ATTRIBUTE' :
         return action.activeAttribute
      case 'ROUND_RESET' :
         return state = null;
      default :
         return state
   }
   return state
}

export default activeCards;
