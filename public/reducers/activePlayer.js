const activePlayer = (state = 1, action) => {
   switch(action.type) {
      case 'NEXT_PLAYER' :
         if (state === action.players) {
            return 1
         }
         return state + 1;
   }
   return state
}

export default activePlayer;
