import React from 'react';
import { Route, IndexRoute } from 'react-router'

// import components
import Main from './components/Main'
import Counter from './components/Counter'
import Home from './components/Home'
import About from './components/About'


const routes = (
   <Route path="/" component={Main}>
       <IndexRoute component={Counter} />
       <Route path='home' component={Home} />
       <Route path="about" component={About} />
   </Route>
)

export default routes;
