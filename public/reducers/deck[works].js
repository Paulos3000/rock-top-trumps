import shuffle from '../util/shuffle'

const deck = (state = [], action) => {
   switch(action.type) {
      case 'SHUFFLE_DECK' :
         let newState = state.map(item => item);
         shuffle(newState)
         return newState;
      default :
         return state
   }
   return state;
}

export default deck;

export const findCard = (state, id) => {
   return state.find(card => card.id === id)
}
