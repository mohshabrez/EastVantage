import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import {userReducer}  from "./reducer/userReducer.ts";

// I Have used the store context of redux thunk which helps to store the one stop data state.

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;