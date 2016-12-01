import React from 'react'

const Notes = () => (
   <div>
      <h4>13. Adding a Fake Backend.</h4>
      <ol>
         <li>api/index.js contains a hardcoded object <code>fakeDatabase</code> which acts as our api</li>
         <li><code>delay()</code> is a func which returns a <strong>Promise</strong></li>
         <li><code>delay()</code> is called within <code>fetchData()</code>, which after it has run <code>setTimeout()</code>, continues with it's own func body after <code>.then()</code></li>
         <li>To log the result as a test, run <code>fetchTodos()</code> and <code>.then()</code> console.log the result</li>
      </ol>
      <h4>14. Fetching Data on Route Change.</h4>
      <ol>
         <li>Remember, filter can now be passed to <code>VisibleTodoList</code> component via props (thanks to <code>withRouter</code>)</li>
         <li>Restructure the returned props to be both <code>todos</code> and <code>filter</code> (as an object)</li>
         <li>Define <code>VisibleTodoList</code> to be a class, so you can pass lifecycle methods to it</li>
         <li>Then reassign this as the <code>withRouter(connect())</code> methods, which wrap <code>mapStateToProps</code> and <code>mapDispatchToProps</code></li>
         <li>We can now call <code>fetchTodos(filter)</code> (see <code>api/index.js</code>) on the mounting of the component, ie. when the link has been clicked, and then re-run it with a new <code>(filter)</code> argument (passed as <code>params</code> in <code>mapStateToProps</code>) when the filter changes</li>
      </ol>
      <h4>15. Dispatching Actions with the Fetched Data.</h4>
      <ol>
         <li>Abstract <code>fetchTodos()</code> code into single func, <code>fetchData()</code>, and then put this into both lifecycle methods</li>
         <li>Replace <code>console.log(...)</code> with an action to pass response data into the state</li>
         <li>Pass <code>receiveTodos</code> into <code>connect()</code> (ES6 object property notation) in order to make this func available to <code>VisibleTodoList</code></li>
         <li>Import <code>receiveTodos</code> from actionCreators file</li>
         <li>Define <code>receiveTodos</code> in actions, and pass it <code>filter</code> and <code>response</code> as parameters</li>
         <li>Then call this in <code>fetchData()</code>, passing the relevant arguments (which are the component props)</li>
         <li>Destructure <code>this.props.filter</code> to <code>filter</code> - if the user navigates away this value will change</li>
         <li>NOW: The page loads and runs <code>receiveTodos</code> automatically on the persisted data (from backend), and THEN, when user selects new filter, re-runs <code>receiveTodos</code> in the <code>componentDidUpdate()</code> lifecycle method, which replaces the todos state with the newly filtered todos</li>
         <li>Final touch: Excellent bit of shorthand... <code>import * as actions from './path'</code>, then simply pass the <code>actions</code> object as 2nd argument to connect. This is called <i>namespace import</i> as opposed to the previous <i>named import</i></li>
      </ol>
      <h4>16. Wrapping dispatch() to Recognise Promises.</h4>
      <ol>
         <li>Change <code>receiveTodos</code> actionCreator to a new actionCreator that will gather data from backend and then pass data to redux state. This will be called <code>fetchTodos</code> (which used to only deal with the initial fetch from the server)</li>
         <li>Implement manual promise middleware into <code>configureStore.js</code>. See the file for commented details on how this works</li>
      </ol>
      <h4>17. The Middleware Chain</h4>
      <ol>
         <li>This one's tricky, but only an overall understanding is probably necessary</li>
         <li>Point of each middleware func is to overwrite <code>store.dispatch</code>, redefining what it actually does.</li>
         <li>But instead of actually changing the public API (bad idea), we pass each func into an array, then in <code>wrapDispatchWithMiddlewares</code> we pass in the middlewares and iterate over each one, reassigning <code>store.dispatch</code> as we go</li>
         <li>Another import element here: we are using 'currying'. This is writing functions within functions within functions, which then have to be called like <code>functionName(argument)(nextFuncArgument)</code></li>
         <li>Take a look at <code>configureStore.js</code> to see how this all works</li>
      </ol>
      <h4>18. Applying Redux Middleware</h4>
      <ol>
         <li>This basically just massively streamlines <code>storeConfiguration.js</code></li>
         <li>Install and import npm dependencies for middlewares and also import <code>applyMiddleware from 'redux'</code> and then implement them, before removing manual funcs</li>
         <li>Finally, include as FINAL ARGUMENT to <code>createStore</code>, the enhancer, which in this case is <code>applyMiddleware</code> which takes a spread array of the middleware functions as its argument</li>
      </ol>
      <h4>19. Updating the State with the Fetched Data</h4>
      <ol>
         <li>First, in <code>todos</code> reducer, remove <code>allTodos</code> and its creator <code>getAllTodos</code>. It is impractical to keep ALL todos in memory (and filter on the client)</li>
      </ol>

   </div>
)

export default Notes
