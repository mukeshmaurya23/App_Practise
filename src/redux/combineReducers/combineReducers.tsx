
import { combineReducers } from "@reduxjs/toolkit";
import { reloadSlice, startUpSlice } from "..";

const rootReducers: any = combineReducers({
    reload: reloadSlice,
    startup: startUpSlice
});

export default rootReducers;