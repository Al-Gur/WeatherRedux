import {accountReducer} from "../reducer/accountReducer.js";
import {legacy_createStore as createStore} from "redux";

const initialState = {
    message: 'Enter city name'
}

export const store = createStore(accountReducer, initialState);