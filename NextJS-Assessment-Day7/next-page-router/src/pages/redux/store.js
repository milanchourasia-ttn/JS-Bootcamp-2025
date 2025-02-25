import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { quoteReducer } from "./quoteReducer";

const rootReducer = combineReducers({
  quotes: quoteReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
