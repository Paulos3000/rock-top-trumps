import { combineReducers } from 'redux'

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

   const name = (state = null, action) => {
      return state
   }

   const activePlayer = (state = false, action) => {
      return state
   }

const p4 = combineReducers({
   hand,
   name,
   activePlayer
})

export default p4;
