import dataReducer from "../reducers/data";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const store = createStore(dataReducer, applyMiddleware(thunk));
