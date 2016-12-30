import { combineReducers } from 'redux'

const id = (state = 1) => {
   return state
}

const name = (state = null, action) => {
   switch(action.type) {
      case 'ADD_NAMES' :
         return action.p1name
   }
   return state
}

const hand = (state = [], action) => {
   switch(action.type) {
      case 'DEAL' :  // <-- this might need changing when deck state is made immutable
         switch(action.players) {
            case 2 :
               // return first HALF of randomised deck
               return action.deck.splice(0, 30)
            case 3 :
               // return first THIRD of randomised deck
               return action.deck.splice(0, 20)
            case 4 :
               // return first QUARTER of randomised deck
               return action.deck.splice(0, 15)
            default :
               return state
         }
      case 'SWITCH_CARDS' :
         switch(action.result) {
            case 'win' :
               // remove front card from deck (use .splice(1)... I think)
               // add ALL ACTIVE CARDS to BACK of deck (minus playerId property)
            case 'lose' :
               // remove front card from deck only
         }
         return state
   }
   return state
}

const p1 = combineReducers({
   hand,
   name,
   id
})

export default p1;
