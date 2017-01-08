import { combineReducers } from 'redux'

const id = (state = 2) => {
   return state
}

const name = (state = null, action) => {
   switch(action.type) {
      case 'ADD_NAMES' :
         return action.p2name
   }
   return state
}

const hand = (state = [], action) => {
   switch(action.type) {
      case 'DEAL' :
         switch(action.players) {
            case 2 :
               // return second HALF of randomised deck
               return action.deck.slice(30, 60)
            case 3 :
               // return second THIRD of randomised deck
               return action.deck.slice(20, 40)
            case 4 :
               // return second QUARTER of randomised deck
               return action.deck.slice(15, 30)
            default :
               return state
         }
      case 'SWITCH_CARDS' :
         switch(action.winnerId) {
            case 2 :
               return [
                  ...state.splice(1),
                  ...action.playedCards
               ]
            default:
               return state.splice(1)
         }
   }
   return state
}

const p2 = combineReducers({
   hand,
   name,
   id
})

export default p2;
