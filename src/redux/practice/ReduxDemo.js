/*
Three Principle of Redux:
1. store
2. action
3. reducer

Store:
1. Holds app state value
2. Allow access to state via getState()
3. Allow state to be updated via dispatch(action)
4. Register listener via subscribe(listener)
5. Handles unregistering of listeners via the function returned bu subscribe(listener)

spread operator: to clone state value

*/

const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const initialStateBooks = {
    numberOfBooks: 10
}

const initialStatePens = {
    numberOfPens: 15
}

// action creator: wrapping the action in a single function
const action_BuyBook = () => {
    return {
        // action
        type: "BUY_BOOK",
        payload: "Buy a new book"
    }
}

const action_BuyPen = () => {
    return {
        // action
        type: "BUY_PEN",
        payload: "Buy a new pen"
    }
}

// reducer( prevState, action ) return newState;
const booksReducer = (state = initialStateBooks, action) => {
    switch (action.type) {
        case "BUY_BOOK": return {
            ...state,
            numberOfBooks: state.numberOfBooks - 1
        }
        default: return state;
    }
}

const pensReducer = (state = initialStatePens, action) => {
    switch (action.type) {
        case "BUY_PEN": return {
            ...state,
            numberOfPens: state.numberOfPens - 1
        }
        default: return state;
    }
}

const reducer = combineReducers({
    Book: booksReducer,
    Pen: pensReducer
});

const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            console.log("Middleware log", result);
            return result;
        }
    }
}

const store = createStore(reducer, applyMiddleware(logger));
console.log("Initial State", store.getState());

// subscibe call after dispatch(action) -> reducer(state, action) -> store -> subscribe
const unsubscribe = store.subscribe(() => {
    console.log("Update State Value", store.getState());
});

store.dispatch(action_BuyBook());
store.dispatch(action_BuyBook());
store.dispatch(action_BuyBook());
store.dispatch(action_BuyBook());
store.dispatch(action_BuyPen());
store.dispatch(action_BuyPen());
store.dispatch(action_BuyPen());

unsubscribe();

/*
1. define an initial state
2. define action
**3. dispatch the action to reducer
4. reducer receive (state, action) and return a new state to store
5. store receive the new state from reducer
**6. subscribe the store value
*/
