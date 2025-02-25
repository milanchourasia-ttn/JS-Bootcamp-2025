import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
} from "./quoteActions";

const initialState = {
  quotes: [],
  loading: false,
  error: null,
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_QUOTES_SUCCESS:
      return { ...state, loading: false, quotes: action.payload };
    case FETCH_QUOTES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
