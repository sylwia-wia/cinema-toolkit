import {IDGenerator} from "../show/actions";
import {createAction} from "@reduxjs/toolkit";
import {setLoader} from "../app/actions";

export const createRoom = createAction('room/create');
export const updateRoom = createAction('room/update');
export const deleteRoom = createAction('room/delete');

export const roomCreate = (state, payload) => {
    payload.roomID = IDGenerator('room', state);

    return createRoom(payload);
}

export  const roomDelete = (dispatch, state, roomID) => {
    dispatch(setLoader(true))

    setTimeout(()=>{
        dispatch(deleteRoom(roomID));
        dispatch(setLoader(false))
    },2000)

}