export const counterFunction = (state=0, action) => {
   switch(action.type) {
      case 'INCREMENT' :
         console.log('incrementing state')
         return state + 1;
      case 'DECREMENT' :
         console.log('decrement state')
         return state - 1;
      default :
         return state;
   }
}

export const todosFunction = (state = [], action) => {
   switch(action.type) {
      case 'ADD_TODO' :
         return [
            ...state,
            {
               id: action.id,
               text: action.text,
               completed: false
            }
         ]
   }
   return state;
}
