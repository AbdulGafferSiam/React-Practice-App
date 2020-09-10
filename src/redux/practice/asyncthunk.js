/*
Async Action creator ->
Redux Thunk -> Middleware = function(dispatch){}
axios -> user to request API endpoint
*/

const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

// action creator
const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}

const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}

const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}

// reducer
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_REQUEST: return {
            ...state, loading: true
        }
        case USER_SUCCESS: return {
            loading: false, 
            users: action.payload,
            error: ''
        }
        case USER_ERROR: return {
            loading: false, 
            users: [],
            error: action.payload
        }
    }
}

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// subscribe
store.subscribe(() => {
    console.log(store.getState());
});

const fetchUser = () => {
    return (dispatch) => {
        dispatch(userRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.name)
            dispatch(userSuccess(users))
        })
        .catch(error => {
            dispatch(userError(error.message))
        })
    }
}

// dispatch
store.dispatch(fetchUser());

// Never use unsubscribe here
// in async unsubscribe will call after any dispatch call
