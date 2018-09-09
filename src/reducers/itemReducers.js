import {
  GET_ITEMS,
  GET_ITEM,
  // EDIT_ITEM,
  DELETE_ITEM,
  CLEAR_ITEMS,
  CLEAR_ITEM
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case GET_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    // case EDIT_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.map(
    //       item =>
    //         item._id === action.payload._id ? (item = action.payload) : item
    //     )
    //   };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        items: []
      };
    case CLEAR_ITEM:
      return {
        ...state,
        item: {}
      };
    default:
      return state;
  }
}
