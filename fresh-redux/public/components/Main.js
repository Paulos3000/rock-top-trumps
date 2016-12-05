import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Main extends Component {
   render() {

      return (
         <div className='container'>
            <h2>Main.js (wrapped by App.js)</h2>
            <hr />
            <Link to='/'>Home</Link>
            {' | '}
            <Link to='/users'>Users</Link>
            {' | '}
            <Link to='/posts'>Posts</Link>
            <hr />

            {/*Render active route component (as matched in URL) and pass all props, regardless*/}
            {/*Alternative method is to connect() to specific component to pass only needed props*/}
            {/*Also note: can pass any individual prop by wrapping in curly braces and applying a key, followed by prop value*/}
            {React.cloneElement(this.props.children, this.props)}
         </div>
      )
   }
}
