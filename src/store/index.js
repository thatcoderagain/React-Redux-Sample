import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {SET_AUTH} from "./actions/auth";

const reducer = (state = [], action) => {
    if (action.type === SET_AUTH) {
        return {
            auth: action.payload
        };
    }

    return state;
};

const initialState = {
    auth: null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
);

export default store;
