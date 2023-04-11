import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { appReducer } from "./app.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers ({appReducer}), composeEnhancers(applyMiddleware()));