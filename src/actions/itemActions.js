import axios from "axios";
import {
  GET_ITEMS,
  GET_ITEM,
  CLEAR_ITEMS,
  CLEAR_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  GET_ERRORS,
  CLEAR_ERRORS,
  SET_LOADING,
  OFF_LOADING
} from "./types";

const url = "http://localhost:5000/api/items";

// Set loading state
export const setLoading = () => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: true
  });
};

// Clear loading state
export const offLoading = () => dispatch => {
  dispatch({
    type: OFF_LOADING,
    payload: false
  });
};

// Clear errors
export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: {}
  });
};

// GET items
export const getItems = () => dispatch => {
  axios
    .get(url)
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .then(res => {
      dispatch({
        type: OFF_LOADING,
        payload: false
      });
    });
};

// GET item
export const getItem = id => dispatch => {
  axios
    .get(`${url}/${id}`)
    .then(res =>
      dispatch({
        type: GET_ITEM,
        payload: res.data
      })
    )
    .then(res => {
      dispatch({
        type: OFF_LOADING,
        payload: false
      });
    });
};

// POST item
export const createItem = (item, history) => dispatch => {
  axios
    .post(url, item)
    .then(res => {
      // redirect
      history.push("/items");
      // clear the errors from the state
      dispatch({
        type: CLEAR_ERRORS,
        payload: {}
      });
    })
    .catch(err =>
      // place errors on the state
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// PUT item
export const editItem = (updateItem, history) => dispatch => {
  axios
    .put(`${url}/${updateItem.id}`, updateItem)
    .then(res => {
      // redirect
      history.push("/items");
      // clear the errors from the state
      dispatch({
        type: CLEAR_ERRORS,
        payload: {}
      });
    })
    .catch(err =>
      // place errors on the state
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// DELETE item
export const deleteItem = id => dispatch => {
  axios.delete(`${url}/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

// clear items
export const clearItems = () => dispatch => {
  dispatch({
    type: CLEAR_ITEMS,
    payload: {}
  });
};

// clear item
export const clearItem = () => dispatch => {
  dispatch({
    type: CLEAR_ITEM,
    payload: {}
  });
};
