import {FETCH_START, FETCH_SUCCESS, FETCH_ERROR} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

export const initalState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: [...state.smurfs, action.payload]
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        err: action.payload
      };
    default:
      return state;
  }
};
