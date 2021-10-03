import { combineReducers } from "redux";
import { calendarReduncer } from "./calendarReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReduncer,
})