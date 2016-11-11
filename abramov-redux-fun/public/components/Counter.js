import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { CounterActions } from '../actions/actions'

class App extends Component {
    constructor(props) {
        super(props);
    }

    click = () => {
        this.props.testClick();
    }

    render() {
        return (
            <div>
                <h1>Hello Redux</h1>
                <h3>Counter: {this.props.global.counter}</h3>
                <button onClick={this.click}>Click Me</button>  { /* no need for .bind(this) because function is ARROW FUNCTION (lexically bound) */ }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        testClick: () => dispatch(CounterActions("Add"))
    }
}

const mapStateToProps = (state) => {
    return state;
}

const DefaultApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default DefaultApp;
