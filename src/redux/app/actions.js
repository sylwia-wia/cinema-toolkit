import {createAction} from "@reduxjs/toolkit";

export const loader = createAction('app/loader');

export const setLoader = (payload) => {
    return loader(payload);
}