import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { todoReducer } from "./dashboard/dashboard.reducer";

const rootReducer = combineReducers({
  todoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
