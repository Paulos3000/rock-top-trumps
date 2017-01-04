const activeCards = (state = [], action) => {
   switch(action.type) {
      case 'GATHER_CARDS' :
         return [
            {
               playerId: action.p1.id,
               card: action.p1.hand[0]
            },
            {
               playerId: action.p2.id,
               card: action.p2.hand[0]
            },
            {
               playerId: action.p3.id,
               card: action.p3.hand[0] || null
            },
            {
               playerId: action.p4.id,
               card: action.p4.hand[0] || null
            }
         ]
      case 'ROUND_RESET' :
         return state = []
   }
   return state
}

export default activeCards;
