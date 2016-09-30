var redux = require('redux');

var createStore = redux.createStore;

/**
 * action
 */
function all() {
    return {
        type: "get all"
    }
}

var initState = {
    users: []
}

/**
 * reducer
 */
function getUser(state, action) {
    state != null ? state : initState;
    switch (action.type) {
        case "get all":
            return Object.assign({}, state, {
                users: [1, 2, 3]
            });
        default:
            return state;
    }
}

/**
 * store
 */
var store = createStore(getUser)
console.log(store.getState());

store.subscribe(function () {
    var currentState = store.getState();
    console.log(currentState);
    currentState.users.push(4, 5, 6);
});

store.dispatch(all());
// console.log(store);
console.log(store.getState());

