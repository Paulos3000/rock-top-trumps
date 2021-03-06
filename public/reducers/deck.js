import shuffle from '../util/shuffle'

const deck = (state = [], action) => {
   switch(action.type) {
      case 'SHUFFLE_DECK' :
         let cloneDeck = action.deck.slice(0);
         shuffle(cloneDeck)
         return cloneDeck;
      default :
         return state
   }
   return state;
}

export default deck;

export const findCard = (state, id) => {
   return state.find(card => card.id === id)
}
