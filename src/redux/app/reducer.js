import {createReducer} from "@reduxjs/toolkit";
import {loader} from "./actions";

const initialState = {
    isLoading: false
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(loader, (state, action) => {
            state["isLoading"] = action.payload;
        } )

})

