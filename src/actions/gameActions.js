import axios from "axios";
import {
  GET_GAMES,
  GET_GAME,
  CREATE_GAME,
  EDIT_GAME,
  DELETE_GAME,
  LOADING
} from "./types";

const url = "http://localhost:5000/api/games";

export const getGames = () => dispatch => {
  dispatch(loading());
  axios.get(url).then(res =>
    dispatch({
      type: GET_GAMES,
      payload: res.data
    })
  );
};

export const getGame = id => dispatch => {
  dispatch(loading());
  axios.get(`${url}/${id}`).then(res =>
    dispatch({
      type: GET_GAME,
      payload: res.data
    })
  );
};

export const createGame = game => dispatch => {
  axios.post(url, game).then(res =>
    dispatch({
      type: CREATE_GAME,
      payload: res.data
    })
  );
};

export const editGame = updateGame => dispatch => {
  axios.put(`${url}/${updateGame.id}`, updateGame).then(res =>
    dispatch({
      type: EDIT_GAME,
      payload: res.data
    })
  );
};

export const deleteGame = id => dispatch => {
  axios.delete(`${url}/${id}`).then(res =>
    dispatch({
      type: DELETE_GAME,
      payload: id
    })
  );
};

export const loading = () => {
  return {
    type: LOADING
  };
};
