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
   }
   return state
}

const p2 = combineReducers({
   hand,
   name,
   id
})

export default p2;
