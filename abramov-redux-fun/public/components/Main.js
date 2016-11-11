import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <div className='jumbotron'>
                  <div className='container'>
                     <h1>React-Redux-Express</h1>
                  </div>
               </div>

               <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                     <div className="navbar-header">
                        <Link to='/home' className='navbar-brand' >React-Redux-Express</Link>
                     </div>
                     <ul className="nav navbar-nav">
                        <li><Link to='/'>Counter</Link></li>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                     </ul>
                  </div>
               </nav>
               <div className='container'>
                  {this.props.children}
               </div>
            </div>
        )
    }
}

export default Main;
