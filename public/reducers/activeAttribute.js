const activeCards = (state = null, action) => {
   switch(action.type) {
      case 'SUBMIT_ATTRIBUTE' :
         return action.activeAttribute
      default :
         return state
   }
   return state
}

export default activeCards;
