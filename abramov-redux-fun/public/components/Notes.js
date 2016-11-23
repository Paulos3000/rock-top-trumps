import React from 'react'

const Notes = () => (
   <div>
      <h4>#13, Adding a Fake Backend.</h4>
      <ol>
         <li>api/index.js contains a hardcoded object <code>fakeDatabase</code> which acts as our api</li>
         <li><code>delay()</code> is a func which returns a <strong>Promise</strong></li>
         <li><code>delay()</code> is called within <code>fetchData()</code>, which after it has run <code>setTimeout()</code>, continues with it's own func body after <code>.then()</code></li>
         <li>To log the result as a test, run <code>fetchTodos()</code> and <code>.then()</code> console.log the result</li>
      </ol>
      <h4>#14, Fetching Data on Route Change.</h4>
      <ol>
         <li>First note</li>
         <li>Second note</li>
      </ol>
   </div>
)

export default Notes
