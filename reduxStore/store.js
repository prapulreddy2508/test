import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";

const middleware = [thunk];

const rootReducer = combineReducers({
    user: userReducer
});

export const store = createStore(
    rootReducer, 
    applyMiddleware(...middleware)
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);     