import { combineReducers } from 'redux'

const id = (state = 4) => {
   return state
}

const name = (state = null, action) => {
   switch(action.type) {
      case 'ADD_NAMES' :
         return action.p4name
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
               // return nothing
               return state = []
            case 4 :
               // return final QUARTER of randomised deck
               return action.deck.slice(45, 60)
            default :
               return state
         }
      case 'SWITCH_CARDS' :
         switch(action.winnerId) {
            case 4 :
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

const p4 = combineReducers({
   hand,
   name,
   id
})

export default p4;
