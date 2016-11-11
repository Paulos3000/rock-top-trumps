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
