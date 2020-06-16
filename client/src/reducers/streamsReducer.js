import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  GET_STREAM,
  LIST_STREAMS,
} from "../actions/types";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      const newState = { ...state };
      console.log(payload.id);
      delete newState[payload.id];
      console.log(newState);
      return newState;
    case GET_STREAM:
      return { ...state, [payload.id]: payload };
    case LIST_STREAMS:
      return payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});

    default:
      return state;
  }
};
