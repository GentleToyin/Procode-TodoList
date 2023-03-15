import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { addDelReducer } from "./reducers/todoReducer";

const initialState = [];

const reducer = combineReducers({
  addDelReducer: addDelReducer,
});

const store = configureStore({ reducer, preloadedState: initialState });

export default store;
