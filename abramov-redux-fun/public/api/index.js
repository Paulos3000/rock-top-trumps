import { v4 } from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
   todos: [
      {
         id: v4(),
         text: 'hey',
         completed: true
      },
      {
         id: v4(),
         text: 'ho',
         completed: true
      },
      {
         id: v4(),
         text: 'lets go',
         completed: true
      }
   ]
}

// define 'delay' function, which will return a Promise
const delay = (ms) =>
   new Promise(resolve =>
      setTimeout(resolve, ms)
   );

export const fetchTodos = (filter) =>
   // when fetchTodos is run (with a filter argument) is runs 'delay' which is exposed to the promise api, ie .then() will run subsequent code when fetch is complete.
   delay(500).then(() => {
      switch (filter) {
         case 'all':
            return fakeDatabase.todos;
         case 'active':
            return fakeDatabase.todos.filter(t => !t.completed);
         case 'completed':
            return fakeDatabase.todos.filter(t => t.completed);
         default:
            throw new Error(`Unknown filter: ${filter}`);
      }
   })
