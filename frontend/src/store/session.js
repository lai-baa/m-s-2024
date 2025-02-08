// frontend/src/store/session.js

import { csrfFetch } from './csrf';

const SET_ADMIN = "session/setAdmin";
const REMOVE_ADMIN = "session/removeAdmin";

const setAdmin = (admin) => {
  return {
    type: SET_ADMIN,
    payload: admin
  };
};

const removeAdmin = () => {
  return {
    type: REMOVE_ADMIN
  };
};

export const login = (admin) => async (dispatch) => {
  const { credential, password } = admin;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password
    })
  });
  const data = await response.json();
  dispatch(setAdmin(data.admin));
  return response;
};

export const restoreAdmin = () => async (dispatch) => {
    const response = await csrfFetch("/api/session");
    const data = await response.json();
    dispatch(setAdmin(data.admin));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE'
    });
    dispatch(removeAdmin());
    return response;
};

const initialState = { admin: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN:
      console.log("Admin logged in:", action.payload); // Debugging line
      return { ...state, admin: action.payload };
    case REMOVE_ADMIN:
      return { ...state, admin: null };
    default:
      return state;
  }
};

export default sessionReducer;