import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  GET_STREAM,
  LIST_STREAMS,
} from "./types";
import streams from "../apis/streams";

import history from "../history";

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const signOut = (payload) => ({
  type: SIGN_OUT,
});
//Create
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push("/");
};
//Read
export const getStream = (id) => async (dispatch, getState) => {
  const response = await streams.get("/streams/" + id);
  dispatch({
    type: GET_STREAM,
    payload: response.data,
  });
};
//Read All
export const listStreams = () => async (dispatch, getState) => {
  const response = await streams.get("/streams");
  dispatch({
    type: LIST_STREAMS,
    payload: response.data,
  });
};
//Update
export const editStream = (id, formValues) => async (dispatch, getState) => {
  const response = await streams.patch("/streams/" + id, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
  history.push("/");
};
//Delete
export const deleteStream = (id) => async (dispatch, getState) => {
  const response = await streams.delete("/streams/" + id);
  dispatch({
    type: DELETE_STREAM,
    payload: { id },
  });
  history.push("/");
};
