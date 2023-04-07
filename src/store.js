import { createStore, combineReducers } from "redux";
import { appReducer } from "./app.reducer";

export const store = createStore(combineReducers ({appReducer}));