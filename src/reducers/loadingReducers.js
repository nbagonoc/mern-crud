import { SET_LOADING, OFF_LOADING } from "../actions/types";

// const initialState = false;
const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case OFF_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
