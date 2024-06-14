import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { todoReducer } from "./dashboard/dashboard.reducer";

const rootReducer = combineReducers({
  todoReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
