function reducerFunction(state = {counter: 0}, action) {
    switch (action.type) {
        case "Add":
            return Object.assign( {}, state, { counter: state.counter + 1 });
        default:
            return state;
    }
}

export default reducerFunction;
