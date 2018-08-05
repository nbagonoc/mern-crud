import {
  GET_GAMES,
  GET_GAME,
  CREATE_GAME,
  EDIT_GAME,
  DELETE_GAME,
  LOADING
} from "../actions/types";

const initialState = {
  games: [],
  game: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        loading: false
      };
    case GET_GAME:
      return {
        ...state,
        game: action.payload,
        loading: false
      };
    case CREATE_GAME:
      return {
        ...state,
        games: [action.payload, ...state.games]
      };
    case EDIT_GAME:
      return {
        ...state,
        games: state.games.map(
          game =>
            game._id === action.payload._id ? (game = action.payload) : game
        )
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter(game => game._id !== action.payload)
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
