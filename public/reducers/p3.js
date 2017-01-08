import { combineReducers } from 'redux'

const id = (state = 3) => {
   return state
}

const name = (state = null, action) => {
   switch(action.type) {
      case 'ADD_NAMES' :
         return action.p3name
   }
   return state
}

const hand = (state = [], action) => {
   switch(action.type) {
      case 'DEAL' :
         switch(action.players) {
            case 2 :
               // return nothing
               return state = []
            case 3 :
               // return final THIRD of randomised deck
               return action.deck.slice(40, 60)
            case 4 :
               // return third QUARTER of randomised deck
               return action.deck.slice(30, 45)
            default :
               return state
         }
      case 'SWITCH_CARDS' :
         switch(action.winnerId) {
            case 3 :
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

const p3 = combineReducers({
   hand,
   name,
   id
})

export default p3;
