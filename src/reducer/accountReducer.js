import {SET_WEATHER} from "../actions/weatherActions.js";
import {SET_MESSAGE} from "../actions/messageActions.js";

export const accountReducer = (state, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {...state, weather: action.payload};
        case SET_MESSAGE:
            return {...state, message: action.payload};
        default:
            return state;
    }
}